# Contributing

We use TypeScript with [`esbuild`](https://esbuild.github.io/)

## Design

- Everything should have an API.
  * Before adding something to the game, create it as a component in `src/api`, exporting all the needed functions.
  * Assume that it will be used externally. Make a [`zod`](https://github.com/colinhacks/zod) object for everything and validate it before using the data, so everything is type-safe and runtime-safe.
  * Generally, you would want to provide at least some level of flexibility, so that other extension developers don't 
- Instead of assigning HTML or creating DOM manually, use [our custom framework](src/api/framework.ts)
- Use [Google Icons](https://fonts.google.com/icons) for all in-game icons

## Bundling
- Use `npm run build` to bundle `src` into `dist/index.js`
- Use `npm run dev` to watch for changes and automatically re-bundle

