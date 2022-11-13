# SolidStart

Everything you need to build a Solid project, powered by [`solid-start`](https://start.solidjs.com);

## Creating a project

```bash
# create a new project in the current directory
npm init solid

# create a new project in my-app
npm init solid my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Solid apps are built with _adapters_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `npm start`. To use a different adapter, add it to the `devDependencies` in `package.json` and specify in your `vite.config.js`.

## Issues

For issue with csstype move `modules_DEP` to `modules` and add to package.json:

```
{
  "//": "here we override csstype since vite issue https://github.com/frenic/csstype/issues/158",
  "overrides": {
    "csstype": "file:modules/csstype"
  }
}
```
