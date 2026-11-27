/**
 * Elevation lookup from the AWS Terrain Tiles (terrarium PNG encoding).
 * Tiles are cached on disk in .cache/dem so a re-run does not download them again.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import sharp from 'sharp';
import type { LonLat } from '../../src/data/types';
import { fetchRetry, mapLimit } from './http';

/** Zoom 12 is about 26 m per pixel at 46° north, close to the 30 m sampling step. */
const ZOOM = 12;
const TILE_SIZE = 256;
const TILE_URL = process.env.DEM_TILE_URL ?? 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium';
const CACHE_DIR = join(process.cwd(), '.cache', 'dem');

/** Position in the global pixel grid of the zoom level. */
function toPixel([lon, lat]: LonLat): [number, number] {
  const size = TILE_SIZE * 2 ** ZOOM;
  const latRad = (lat * Math.PI) / 180;
  return [((lon + 180) / 360) * size, ((1 - Math.asinh(Math.tan(latRad)) / Math.PI) / 2) * size];
}

/** The four pixels around a point and the weights for blending them. */
function corners(point: LonLat) {
  const [px, py] = toPixel(point);
  const fx = px - 0.5;
  const fy = py - 0.5;
  const x0 = Math.floor(fx);
  const y0 = Math.floor(fy);
  return { x0, y0, tx: fx - x0, ty: fy - y0 };
}

const tileKey = (x: number, y: number) => `${Math.floor(x / TILE_SIZE)}/${Math.floor(y / TILE_SIZE)}`;

export class Dem {
  private tiles = new Map<string, Float32Array>();

  /** Download (or read from cache) every tile needed for these points. */
  async load(points: LonLat[]): Promise<void> {
    const needed = new Set<string>();
    for (const point of points) {
      const { x0, y0 } = corners(point);
      needed.add(tileKey(x0, y0));
      needed.add(tileKey(x0 + 1, y0));
      needed.add(tileKey(x0, y0 + 1));
      needed.add(tileKey(x0 + 1, y0 + 1));
    }
    const missing = [...needed].filter((key) => !this.tiles.has(key));
    await mapLimit(missing, 6, async (key) => {
      this.tiles.set(key, await this.readTile(key));
    });
  }

  private async readTile(key: string): Promise<Float32Array> {
    const file = join(CACHE_DIR, String(ZOOM), `${key}.png`);
    let png: Buffer;
    if (existsSync(file)) {
      png = readFileSync(file);
    } else {
      const response = await fetchRetry(`${TILE_URL}/${ZOOM}/${key}.png`);
      png = Buffer.from(await response.arrayBuffer());
      mkdirSync(dirname(file), { recursive: true });
      writeFileSync(file, png);
    }
    const { data, info } = await sharp(png).raw().toBuffer({ resolveWithObject: true });
    if (info.width !== TILE_SIZE || info.height !== TILE_SIZE) {
      throw new Error(`Unexpected elevation tile size ${info.width}x${info.height} for ${key}`);
    }
    const elevations = new Float32Array(TILE_SIZE * TILE_SIZE);
    for (let i = 0; i < elevations.length; i++) {
      const offset = i * info.channels;
      elevations[i] = data[offset] * 256 + data[offset + 1] + data[offset + 2] / 256 - 32768;
    }
    return elevations;
  }

  private pixel(x: number, y: number): number {
    const tile = this.tiles.get(tileKey(x, y));
    if (!tile) throw new Error('Elevation tile not loaded; call load() first');
    const col = ((x % TILE_SIZE) + TILE_SIZE) % TILE_SIZE;
    const row = ((y % TILE_SIZE) + TILE_SIZE) % TILE_SIZE;
    return tile[row * TILE_SIZE + col];
  }

  /** Elevation in metres at a point, blended from the four nearest pixels. */
  elevation(point: LonLat): number {
    const { x0, y0, tx, ty } = corners(point);
    const top = this.pixel(x0, y0) * (1 - tx) + this.pixel(x0 + 1, y0) * tx;
    const bottom = this.pixel(x0, y0 + 1) * (1 - tx) + this.pixel(x0 + 1, y0 + 1) * tx;
    return top * (1 - ty) + bottom * ty;
  }
}
