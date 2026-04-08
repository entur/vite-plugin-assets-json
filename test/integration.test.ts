import { readFile, rm } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'vite';
import { afterAll, describe, expect, it } from 'vitest';
import assetsJSON from '../src/main';

const testDir = dirname(fileURLToPath(import.meta.url));
const fixtureDir = resolve(testDir, 'fixture');
const outDir = resolve(testDir, 'dist');

describe('vite-plugin-assets-json', () => {
  afterAll(async () => {
    await rm(outDir, { recursive: true, force: true });
  });

  it('generates assets.json with js entries', async () => {
    await build({
      root: fixtureDir,
      logLevel: 'silent',
      build: {
        manifest: true,
        outDir,
        emptyOutDir: true,
      },
      plugins: [assetsJSON()],
    });
    const assets = JSON.parse(
      await readFile(resolve(outDir, 'assets.json'), 'utf-8')
    );
    expect(assets).toHaveProperty('js');
    expect(assets).toHaveProperty('css');
    expect(assets.js.length).toBeGreaterThan(0);
    expect(assets.js[0]).toHaveProperty('value');
    expect(assets.js[0]).toHaveProperty('type', 'entry');
  });

  it('prefixes asset paths with default prefix', async () => {
    await build({
      root: fixtureDir,
      logLevel: 'silent',
      build: {
        manifest: true,
        outDir,
        emptyOutDir: true,
      },
      plugins: [assetsJSON()],
    });
    const assets = JSON.parse(
      await readFile(resolve(outDir, 'assets.json'), 'utf-8')
    );
    for (const entry of assets.js) {
      expect(entry.value).toMatch(/^\/products-frontend-static\//);
    }
  });

  it('includes css entries from entry chunks', async () => {
    await build({
      root: fixtureDir,
      logLevel: 'silent',
      build: {
        manifest: true,
        outDir,
        emptyOutDir: true,
      },
      plugins: [assetsJSON()],
    });
    const assets = JSON.parse(
      await readFile(resolve(outDir, 'assets.json'), 'utf-8')
    );
    expect(assets.css.length).toBeGreaterThan(0);
    for (const entry of assets.css) {
      expect(entry.value).toMatch(/^\/products-frontend-static\//);
      expect(entry.type).toBe('entry');
    }
  });

  it('respects custom pathPrefix', async () => {
    const customOutDir = resolve(__dirname, 'dist-custom');
    await build({
      root: fixtureDir,
      logLevel: 'silent',
      build: {
        manifest: true,
        outDir: customOutDir,
        emptyOutDir: true,
      },
      plugins: [assetsJSON({ pathPrefix: '/custom/' })],
    });

    const assets = JSON.parse(
      await readFile(resolve(customOutDir, 'assets.json'), 'utf-8')
    );
    for (const entry of assets.js) {
      expect(entry.value).toMatch(/^\/custom\//);
    }

    await rm(customOutDir, { recursive: true, force: true });
  });

  it('handles missing manifest gracefully', async () => {
    const emptyOutDir = resolve(__dirname, 'dist-empty');
    await build({
      root: fixtureDir,
      logLevel: 'silent',
      build: {
        manifest: false,
        outDir: emptyOutDir,
        emptyOutDir: true,
      },
      plugins: [assetsJSON()],
    });

    // No assets.json should be generated when manifest is disabled
    await expect(
      readFile(resolve(emptyOutDir, 'assets.json'), 'utf-8')
    ).rejects.toThrow();

    await rm(emptyOutDir, { recursive: true, force: true });
  });
});
