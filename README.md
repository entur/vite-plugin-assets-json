# @entur/vite-plugin-assets-json

A vite plugin to generate the required `assets.json` file

## Install

```
npm i -D @entur/vite-plugin-assets.json
```

## Usage

In `vite.config.ts`:

```ts
import { defineConfig } from 'vite';
import { assetsJSON } from '@entur/vite-plugin-assets-json';

export default {
  plugins: [
    assetsJSON()
  ]
};
```

With this `.vite/manifest.json`-file:

```json
{
  "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Demibold.eot": {
    "file": "assets/Entur-Nationale-Demibold-28Bm0v4p.eot",
    "src": "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Demibold.eot"
  },
  "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Demibold.woff": {
    "file": "assets/Entur-Nationale-Demibold-1a3cm77m.woff",
    "src": "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Demibold.woff"
  },
  "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Demibold.woff2": {
    "file": "assets/Entur-Nationale-Demibold-cDUpJyLp.woff2",
    "src": "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Demibold.woff2"
  },
  "node_modules/@entur/typography/dist/fonts/Entur-Nationale-DemiboldItalic.eot": {
    "file": "assets/Entur-Nationale-DemiboldItalic-yEBpPKcn.eot",
    "src": "node_modules/@entur/typography/dist/fonts/Entur-Nationale-DemiboldItalic.eot"
  },
  "node_modules/@entur/typography/dist/fonts/Entur-Nationale-DemiboldItalic.woff": {
    "file": "assets/Entur-Nationale-DemiboldItalic-Y6yQ14Oq.woff",
    "src": "node_modules/@entur/typography/dist/fonts/Entur-Nationale-DemiboldItalic.woff"
  },
  "node_modules/@entur/typography/dist/fonts/Entur-Nationale-DemiboldItalic.woff2": {
    "file": "assets/Entur-Nationale-DemiboldItalic-90q0AW8J.woff2",
    "src": "node_modules/@entur/typography/dist/fonts/Entur-Nationale-DemiboldItalic.woff2"
  },
  "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Italic.eot": {
    "file": "assets/Entur-Nationale-Italic-pTmgsEsK.eot",
    "src": "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Italic.eot"
  },
  "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Italic.woff": {
    "file": "assets/Entur-Nationale-Italic-YSbXmt4y.woff",
    "src": "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Italic.woff"
  },
  "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Italic.woff2": {
    "file": "assets/Entur-Nationale-Italic-mSc8IaoD.woff2",
    "src": "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Italic.woff2"
  },
  "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Light.eot": {
    "file": "assets/Entur-Nationale-Light-z8396T2U.eot",
    "src": "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Light.eot"
  },
  "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Light.woff": {
    "file": "assets/Entur-Nationale-Light-hP7i3Kua.woff",
    "src": "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Light.woff"
  },
  "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Light.woff2": {
    "file": "assets/Entur-Nationale-Light-0sMePzCC.woff2",
    "src": "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Light.woff2"
  },
  "node_modules/@entur/typography/dist/fonts/Entur-Nationale-LightItalic.eot": {
    "file": "assets/Entur-Nationale-LightItalic-aA_wgsur.eot",
    "src": "node_modules/@entur/typography/dist/fonts/Entur-Nationale-LightItalic.eot"
  },
  "node_modules/@entur/typography/dist/fonts/Entur-Nationale-LightItalic.woff": {
    "file": "assets/Entur-Nationale-LightItalic-Lk4928vu.woff",
    "src": "node_modules/@entur/typography/dist/fonts/Entur-Nationale-LightItalic.woff"
  },
  "node_modules/@entur/typography/dist/fonts/Entur-Nationale-LightItalic.woff2": {
    "file": "assets/Entur-Nationale-LightItalic-uqZLCMou.woff2",
    "src": "node_modules/@entur/typography/dist/fonts/Entur-Nationale-LightItalic.woff2"
  },
  "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Medium.eot": {
    "file": "assets/Entur-Nationale-Medium-CPz7EuuT.eot",
    "src": "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Medium.eot"
  },
  "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Medium.woff": {
    "file": "assets/Entur-Nationale-Medium-YbVnOm9s.woff",
    "src": "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Medium.woff"
  },
  "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Medium.woff2": {
    "file": "assets/Entur-Nationale-Medium-Q6-l-1of.woff2",
    "src": "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Medium.woff2"
  },
  "node_modules/@entur/typography/dist/fonts/Entur-Nationale-MediumItalic.eot": {
    "file": "assets/Entur-Nationale-MediumItalic-4MlDlMJy.eot",
    "src": "node_modules/@entur/typography/dist/fonts/Entur-Nationale-MediumItalic.eot"
  },
  "node_modules/@entur/typography/dist/fonts/Entur-Nationale-MediumItalic.woff": {
    "file": "assets/Entur-Nationale-MediumItalic-caFl8M7a.woff",
    "src": "node_modules/@entur/typography/dist/fonts/Entur-Nationale-MediumItalic.woff"
  },
  "node_modules/@entur/typography/dist/fonts/Entur-Nationale-MediumItalic.woff2": {
    "file": "assets/Entur-Nationale-MediumItalic-EJUHkijb.woff2",
    "src": "node_modules/@entur/typography/dist/fonts/Entur-Nationale-MediumItalic.woff2"
  },
  "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Regular.eot": {
    "file": "assets/Entur-Nationale-Regular-WQxkPo6E.eot",
    "src": "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Regular.eot"
  },
  "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Regular.woff": {
    "file": "assets/Entur-Nationale-Regular-aVyDRl5G.woff",
    "src": "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Regular.woff"
  },
  "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Regular.woff2": {
    "file": "assets/Entur-Nationale-Regular-ziADNyB3.woff2",
    "src": "node_modules/@entur/typography/dist/fonts/Entur-Nationale-Regular.woff2"
  },
  "src/assets/img/dme_upload_description.png": {
    "file": "assets/dme_upload_description-bUEkxyq8.png",
    "src": "src/assets/img/dme_upload_description.png"
  },
  "src/assets/img/ducks.png": {
    "file": "assets/ducks-a7Cd3uSr.png",
    "src": "src/assets/img/ducks.png"
  },
  "src/assets/img/fare_table_upload_description.png": {
    "file": "assets/fare_table_upload_description-UXF1umDo.png",
    "src": "src/assets/img/fare_table_upload_description.png"
  },
  "src/assets/img/gi_upload_description.png": {
    "file": "assets/gi_upload_description-FYNPeeZN.png",
    "src": "src/assets/img/gi_upload_description.png"
  },
  "src/assets/img/landscape.png": {
    "file": "assets/landscape-mAFJUEnW.png",
    "src": "src/assets/img/landscape.png"
  },
  "src/assets/img/squirrel.png": {
    "file": "assets/squirrel-G5KecMOq.png",
    "src": "src/assets/img/squirrel.png"
  },
  "src/main.tsx": {
    "assets": [
      "assets/ducks-a7Cd3uSr.png",
      "assets/landscape-mAFJUEnW.png",
      "assets/squirrel-G5KecMOq.png",
      "assets/fare_table_upload_description-UXF1umDo.png",
      "assets/dme_upload_description-bUEkxyq8.png",
      "assets/gi_upload_description-FYNPeeZN.png",
      "assets/Entur-Nationale-Light-z8396T2U.eot",
      "assets/Entur-Nationale-Light-0sMePzCC.woff2",
      "assets/Entur-Nationale-Light-hP7i3Kua.woff",
      "assets/Entur-Nationale-LightItalic-aA_wgsur.eot",
      "assets/Entur-Nationale-LightItalic-uqZLCMou.woff2",
      "assets/Entur-Nationale-LightItalic-Lk4928vu.woff",
      "assets/Entur-Nationale-Regular-WQxkPo6E.eot",
      "assets/Entur-Nationale-Regular-ziADNyB3.woff2",
      "assets/Entur-Nationale-Regular-aVyDRl5G.woff",
      "assets/Entur-Nationale-Italic-pTmgsEsK.eot",
      "assets/Entur-Nationale-Italic-mSc8IaoD.woff2",
      "assets/Entur-Nationale-Italic-YSbXmt4y.woff",
      "assets/Entur-Nationale-Medium-CPz7EuuT.eot",
      "assets/Entur-Nationale-Medium-Q6-l-1of.woff2",
      "assets/Entur-Nationale-Medium-YbVnOm9s.woff",
      "assets/Entur-Nationale-MediumItalic-4MlDlMJy.eot",
      "assets/Entur-Nationale-MediumItalic-EJUHkijb.woff2",
      "assets/Entur-Nationale-MediumItalic-caFl8M7a.woff",
      "assets/Entur-Nationale-Demibold-28Bm0v4p.eot",
      "assets/Entur-Nationale-Demibold-cDUpJyLp.woff2",
      "assets/Entur-Nationale-Demibold-1a3cm77m.woff",
      "assets/Entur-Nationale-DemiboldItalic-yEBpPKcn.eot",
      "assets/Entur-Nationale-DemiboldItalic-90q0AW8J.woff2",
      "assets/Entur-Nationale-DemiboldItalic-Y6yQ14Oq.woff"
    ],
    "css": [
      "assets/main--EzDuqw6.css"
    ],
    "file": "assets/main-D04VMQ0v.js",
    "isEntry": true,
    "src": "src/main.tsx"
  }
}
```

the plugin Will produce this `assets.json`-file

```json
{
  "js": [
    {
      "value": "/products-frontend-static/assets/main-D04VMQ0v.js",
      "type": "entry"
    }
  ],
  "css": [
    {
      "value": "/products-frontend-static/assets/main--EzDuqw6.css",
      "type": "entry"
    }
  ]
}
```
