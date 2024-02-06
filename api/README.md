@entur/vite-plugin-assets-json

# @entur/vite-plugin-assets-json

## Interfaces

- [AssetsJSONOptions](interfaces/AssetsJSONOptions.md)

## Functions

### assetsJSON

▸ **assetsJSON**(`options?`): `Plugin`\<`any`\>

Vite plugin to generate an assets JSON file with relevant information about the main assets.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`AssetsJSONOptions`](interfaces/AssetsJSONOptions.md) | Configuration options for the plugin. |

#### Returns

`Plugin`\<`any`\>

Vite plugin instance.

**`Example`**

```ts
import { defineConfig } from 'vite';
import { assetsJSON } from '@entur/vite-plugin-assets-json';

export default defineConfig({
  plugins: [
    assetsJSON()
  ]
});
```

#### Defined in

[main.ts:51](https://github.com/entur/vite-plugin-assets-json/blob/main/src/main.ts#L51)
