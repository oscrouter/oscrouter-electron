
# Pretty much minimum Electron + TypeScript + React + webpack boilerplate. Period.

This boilerplate is based on [electron-webpack-quick-start](https://github.com/electron-userland/electron-webpack-quick-start).

## What's the point?

* Live reload for both `renderer` and `main` processes so you can develop-and-check really fast iteratively.
* Use of [`electron-builder`](https://github.com/electron-userland/electron-builder) to package and build a distributable electron application.
* Use of npm instead of yarn.

## Development Scripts

```bash
# run application in development mode
npm run dev

# compile source code and create webpack output
npm run compile

# `npm run compile` & create build with electron-builder
npm dist

# `npm run compile` & create unpacked build with electron-builder
npm run dist:dir
```

