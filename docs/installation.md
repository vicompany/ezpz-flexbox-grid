# EZPZ Flexbox grid Documentation

[Documentation](docs.md) > Installation

## Installation
The EZPZ Flexbox Grid can be installed by importing the ```_ezpz-flexbox-grid.scss``` file to your project and compiling your CSS. This can be achieved by manually downloading it from Github or using NPM to install the grid.

### NPM Install
[![NPM](https://nodei.co/npm/ezpz-grid.png?compact=true)](https://npmjs.org/package/ezpz-grid)

### Import into your project
```scss
@import 'node_modules/ezpz-grid/lib/ezpz-flexbox-grid';
```

#### Overwriting the default variables
The default variables used within the grid are set with a !default flag. Please note that the !default flag will set a variable if it is unset *or* if its current value is null. So remember to include your own variables before importing the grid:

```scss
@import 'my-variables.scss';

@import 'node_modules/ezpz-grid/lib/ezpz-flexbox-grid';
```

## Next
* [Settings](settings.md)
