# Lit + Vite + Storybook Starter

## Setup

```bash
# setup vite and Lit (name your project folder)
npm create vite@latest my-webcomponents -- --template lit

# install node modules
cd my-webcomponents
npm install

# install storybook
npx sb@latest init --builder storybook-builder-vite
```

### Config updates

```js
//update .storybook/main.sj
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/web-components',
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    config.optimizeDeps.include = [
      ...(config.optimizeDeps?.include ?? []),
      '@storybook/web-components',
    ];
    config.optimizeDeps.exclude = [
      ...(config.optimizeDeps?.exclude ?? []),
      'lit',
      'lit-html',
    ];

    // return the customized config
    return config;
  },
};

//update vite.config.js
   lib: {
      entry: 'src/index.js', //update `src/my-elementjs` to `src/index.js`
      formats: ['es'],
    },
    rollupOptions: {
      // external: /^lit/,
    },

//Also in `index.html` update `src/my-elementjs` to `src/index.js`
```

## Development

```bash
# local dev server
npm run storybook
```

## Build for production

- Move lit to devDependency in your `package.json`
- If you haven't already, update `src/my-elementjs` to `src/index.js` in `index.html`
- Update `main` and `export` in `package.json` (and if you want the version number too)

```json
  "main": "dist/index.es.js",
  "exports": {
    ".": "./dist/index.es.js"
  },
```

```bash

# build for production
npm run build
```

Your files should be in `/dist/`

## Reference

[Publish Web Components using Vite, Lit and Storybook ](https://dev.to/leon/vite-lit-and-storybook-43f)
