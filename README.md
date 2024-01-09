# node-loader-extensionless

A node loader that auto-appends .js or .ts extensions to imports, based on the parentURL.

When paired with [@node-loader/babel](https://github.com/node-loader/node-loader-babel) loader allows for loading typescript via NodeJS loaders

## Installation

```sh
npm install --save @node-loader/extensionless

yarn add @node-loader/extensionless

pnpm install --save @node-loader/extensionless
```

## Usage

```sh
node --loader @node-loader/extensionless
```
