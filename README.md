# training-js-tools
=============

## What is this?

To try ESLint and Flow.

## Usage

1. Clone this repository.
2. Prepare the environment. You are recommended to use [asdf](https://github.com/asdf-vm/asdf) for installing [node.js](https://nodejs.org/en/).
```bash
$ npm install -g yarn
$ cd training-js-tools
$ yarn
$ yarn try src/
```
3. Run style check.
```bash
$ yarn lint

### If you want to run with fixing
### $ yarn lint-fix
```
4. Run type check.
```bash
$ yarn flow
```
