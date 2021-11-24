# manage-web-ui

## Building

```bash
# clone repo
git clone https://gitlab.com/somersetinc/manage-web-ui.git

# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn serve

# build for production with minification
yarn build
```

## Linting & Formatting

```bash
# Lint all files, fixing many violations automatically
yarn lint

# Formatting all files with Prettier
yarn format
```

## Pre-commit

Staged files are automatically linted and formatted before each commit. See lint-staged config in `package.json` to update.
[Husky](https://github.com/typicode/husky) is used to install the pre-commit hook.

## Icons/SVG:

Set up yours svg icons in `/src-icons` folder.

```bash
# Generate new icons-sprite.svg from /src-icons folder
yarn build:icons
```


## Сборка библиотеки компонентов
```bash
npm run build:library

# or
npx vite build
```
