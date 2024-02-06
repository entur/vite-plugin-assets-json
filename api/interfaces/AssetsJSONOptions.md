[@entur/vite-plugin-assets-json](../README.md) / AssetsJSONOptions

# Interface: AssetsJSONOptions

Options for the Vite plugin to generate an assets JSON file.

## Properties

### assetsDir

• `Optional` **assetsDir**: `string`

Where should the `assets.json`-file be generated?, relative to vite `outDir`

**`Default`**

```ts
''
```

#### Defined in

[main.ts:26](https://github.com/entur/vite-plugin-assets-json/blob/main/src/main.ts#L26)

___

### manifestPaths

• `Optional` **manifestPaths**: `string`[]

Path of the manifest files that should be read and transformed, relative to `outDir`.

**`Default`**

```ts
['.vite/manifest.json', '.vite/manifest-assets.json']
```

#### Defined in

[main.ts:16](https://github.com/entur/vite-plugin-assets-json/blob/main/src/main.ts#L16)

___

### pathPrefix

• `Optional` **pathPrefix**: `string`

Prefix for the produced asset path

**`Default`**

```ts
'/products-frontend-static/'
```

#### Defined in

[main.ts:21](https://github.com/entur/vite-plugin-assets-json/blob/main/src/main.ts#L21)
