# Solid JS Lineage OS Device selection helper

This is a small pet project i hacked b/c (a) i was looking for a new phone that is both well maintained by the LineageOS team *and* still offers a firmware update process once LineageOS is installed and (b) i was keen to give [Solid JS](https://www.solidjs.com/) – the [supposedly fastest javascript framework](https://javascript.plainenglish.io/javascript-frameworks-performance-comparison-2020-cd881ac21fce) – a little test drive.

Currently it only does fulfill exactly my both (a) requirements, but it could potentially be expanded to provide flexible and complete tabular comparison of all devices in the LineageOS wiki.

Potential TODOs / future features (knock yourself out):
- centralise repository name and URLs in a config
- use a YAML library to parse device data in `fetch/deviceData.ts`
- Caching (i.e. local storage) and on-demand update fetches
- Bundled requests or download and extraction of complete repo as ZIP instead of multiple, individual requests
- display data as table
- more filters, i.e. auto-filter & sortable DataTables
- dynamic selection of features to be display in the device list
- …

## Development

1. Clone repo.
2. `pnpm install` (npm: `npm install`)
3. `pnpm dev` (npm: `npm run dev`)

## Generate Production Build

`pnpm build` (npm: `npm run build`)

You can then deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)
