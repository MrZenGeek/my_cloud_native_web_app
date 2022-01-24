# Monorepo Template

A minimal monorepo template with:
* [Lerna](https://lerna.js.org/)
* [TypeScript](http://www.typescriptlang.org/)

## Install dependencies

1. `npm install`
1. `npm run bootstrap`

## To add a new service

Run the following command:

```sh
npm run generate service
```

## Generators

The `npm run generate` command uses `plop` ([https://plopjs.com/](https://plopjs.com/)).

It all starts with the `./generators/index.js` file.

### Add a new service template

1. Create a new directory in `./templates/services`. Lower case letters and hyphens only.
1. Use the `*.hbs` file extension and Handlebar template syntax for files with dynamic content.

Look at other service templates in `./templates/services` for further guidance.