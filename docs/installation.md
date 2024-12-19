# EZPZ Flexbox grid Documentation

[Documentation](docs.md) > Installation

## Installation
The EZPZ Flexbox Grid can be installed by importing the `ezpz-grid` module to your project and compiling your CSS. This can be achieved by manually downloading it from Github or using NPM to install the grid.

### Sass Package importer

Because Sass is most widely-used alongside the Node.js ecosystem, it comes with a pkg: importer that uses the same algorithm as Node.js to load Sass stylesheets. This isn’t available by default, but it’s easy to turn on using the commandline:

```bash
sass --pkg-importer=node src/scss:dist/css
```

Or by using it [with `Vite`](https://github.com/hi-ogawa/reproductions/tree/main/vite-17948-sass-NodePackageImporter).

### NPM Install
[![NPM](https://nodei.co/npm/ezpz-grid.png?compact=true)](https://npmjs.org/package/ezpz-grid)

### Import into your project

```scss
@use 'pkg:ezpz-grid';
```

#### Overwriting the default variables
The default variables used within the grid are set with a !default flag. Please note that the !default flag will set a variable if it is unset *or* if its current value is null. So remember to include your own variables before importing the grid:

```scss
@use 'config';

@use 'pkg:ezpz-grid' with (
    $ezpz-namespace: '.my-grid';
    $ezpz-gutter: config.$gutter;
);

```

Sass reference: https://sass-lang.com/documentation/at-rules/use/#configuration

## Next
* [Settings](settings.md)
