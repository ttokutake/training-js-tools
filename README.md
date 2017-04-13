# training-js-tools
=============

## What is this?

To try ESLint and Flow.

## Usage

1. Clone this repository.
2. Prepare the environment. You are recommended to use [asdf](https://github.com/asdf-vm/asdf) for installing [node.js](https://nodejs.org/en/).
```bash
$ cd training-js-tools
$ npm install # or "yarn install"
$ npm run try src/index.js
```
3. Run style check.
```bash
$ npm run lint

### If you want to run with fixing
### $ npm run lint-fix
```
4. Run type check.
```bash
$ npm run flow
```
