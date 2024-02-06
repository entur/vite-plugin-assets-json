/* eslint-disable import/no-unused-modules */
import type { Plugin, Manifest } from 'vite';

import { promises as fs } from 'fs';
import { resolve } from 'path';

/**
 * Options for the Vite plugin to generate an assets JSON file.
 */
export interface AssetsJSONOptions {
  /**
   * Path of the manifest files that should be read and transformed, relative to `outDir`.
   *
   * @default ['.vite/manifest.json', '.vite/manifest-assets.json']
   */
  manifestPaths?: string[];
  /**
   * Prefix for the produced asset path
   * @default '/products-frontend-static/'
   */
  pathPrefix?: string;
  /**
   * Where should the `assets.json`-file be generated?, relative to vite `outDir`
   * @default ''
   */
  assetsDir?: string;
}

declare module 'vite' {
  interface ManifestChunk {
    integrity: string;
  }
}

/**
 * Vite plugin to generate an assets JSON file with relevant information about the main assets.
 * @param options - Configuration options for the plugin.
 * @returns Vite plugin instance.
 * @example
 * ```ts
 * import { defineConfig } from 'vite';
 * import { assetsJSON } from '@entur/vite-plugin-assets-json';
 *
 * export default defineConfig({
 *   plugins: [
 *     assetsJSON()
 *   ]
 * });
 * ```
 */
export const assetsJSON = (options: AssetsJSONOptions = {}): Plugin => {
  const {
    manifestPaths = ['.vite/manifest.json', '.vite/manifest-assets.json'],
    pathPrefix = '/products-frontend-static/',
    assetsDir = ''
  } = options;

  return {
    name: '@entur/vite-plugin-assets-json',
    apply: 'build',
    enforce: 'post',
    async writeBundle({ dir }) {
      // eslint-disable-next-line compat/compat
      await Promise.all(
        manifestPaths.map((path) =>
          createAssetManifest(path, dir!, assetsDir, pathPrefix)
        )
      );
    }
  };
};

/**
 * Create an asset manifest JSON file based on the Vite manifest.
 * @param manifestPath - Path to the Vite manifest file.
 * @param outDir - Output directory of the Vite build.
 * @param assetsDir - Directory to store the generated assets JSON file.
 * @param pathPrefix - Prefix for the produced asset path.
 * @returns A Promise that resolves when the asset manifest is created.
 * @private
 * @example
 * ```ts
 * const manifestPath = '.vite/manifest.json';
 * const outDir = 'dist';
 * const assetsDir = 'assets';
 * const pathPrefix = '/my-static-assets/';
 * createAssetManifest(manifestPath, outDir, assetsDir, pathPrefix);
 * ```
 */
const createAssetManifest = async (
  manifestPath: string,
  outDir: string,
  assetsDir: string,
  pathPrefix: string
) => {
  const resolveInOutDir = (path: string) => resolve(outDir, path);

  manifestPath = resolveInOutDir(manifestPath);

  const manifest: Manifest | undefined = await fs
    .readFile(manifestPath, 'utf-8')
    .then(JSON.parse, () => undefined);
  const assets: Record<string, Record<string, string>[]> = {
    js: [],
    css: []
  };

  if (manifest) {
    await Promise.all(
      Object.values(manifest).map(async (chunk) => {
        if (chunk.isEntry) {
          assets.js.push({
            value: `${pathPrefix}${chunk.file}`,
            type: 'entry'
          });

          if (chunk.css) {
            chunk.css.forEach((file) =>
              assets.css.push({ value: `${pathPrefix}${file}`, type: 'entry' })
            );
          }
        }
      })
    );

    const assetsPath = manifestPath
      .replace('manifest.json', 'assets.json')
      .replace('.vite/', assetsDir);

    await fs.writeFile(assetsPath, JSON.stringify(assets, null, 2));
  }
};
