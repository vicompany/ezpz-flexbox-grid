# EZPZ Flexbox Grid #
A lightweight Sass (.scss) flexbox grid system that's easy to setup and offers a lot of customisation. By [Sven Sigmond](https://www.vicompany.nl/vi-company/sven-sigmond
) – ([VI Company](http://www.vicompany.nl))

## Demo ##
* [Default features](http://vicompany.github.io/ezpz-flexbox-grid/)
* [Optional features](http://vicompany.github.io/ezpz-flexbox-grid/optional-features.html)
* [Responsive features](http://vicompany.github.io/ezpz-flexbox-grid/responsive-features.html)
* [Using fractions](http://vicompany.github.io/ezpz-flexbox-grid/fractions.html)

## Is this the grid for you? ##
* Easy peasy to setup and use
* Works in all [modern browsers & IE11](http://caniuse.com/#search=flex)
* IE10 when using [Autoprefixer](https://github.com/postcss/autoprefixer)
* Uses [BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) for grid classes
* Many optional features to reduce CSS bloat
* Define and use columns or fractions
* Infinite nesting
* Create and name your own breakpoints
* Custom namespacing

## What about older browsers? ##
The aim of the EZPZ Flexbox Grid is to offer an easy to use grid system that takes abundant calculations and classes out of your workflow by leveraging flexbox' "awareness" of available space within a section.

Unfortunately, legacy browsers like IE9 and below do not support the flexbox syntax and won't be able to use these properties. To maintain simplicity, reduce code bloat and in the light of [Microsoft's decision to stop support for IE10 and below](https://www.microsoft.com/en-us/WindowsForBusiness/End-of-IE-support), the decision has been made to not support older browsers.

## Installation ##
The EZPZ Flexbox Grid can be installed by importing the .SCSS file to your project and compiling your CSS. This can be achieved by manually downloading it from Github or using NPM to install the grid.

### NPM ###
```
npm install ezpz-grid
```

## Settings ##
These variables control the generation CSS for the EZPZ grid and can be set to your own preferred values.

### Mandatory ###

```
$ezpz-namespace
```
The namespace for the grid sections of the ezpz grid. Changing this variable will automatically change all the grid classes to the new namespace.

Default: **'grid'**

```
$ezpz-grid-type
```
The grid can be used as a column or fraction based system. This variable can be set to *'columns'* or *'fractions'*.

Default: **'columns'**

```
$ezpz-gutter
```
The amount of horizontal space the gutter between 2 cells will occupy. Changing this variable will change the amount of space a gutter occupies.

Default: **1rem**.

```
$ezpz-columns
```
When $ezpz-grid-type is set to 'grid' this variable controls the amount of cells that will horizontally occupy a grid section. Changing this variable will automatically generate the proper .cell--{#} classes.

Default: **12**

```
$ezpz-fractions
```
When $ezpz-grid-type is set to 'fractions' this variable controls the amount of space that a cell will horizontally occupy in a grid section. Changing this variable will automatically generate the proper .cell--{fraction} classes.

Default: **(1:2), (1:3), (2:3), (1:4), (3:4)**

```
$ezpz-breakpoints
```
The breakpoint names and sizes that will be used to generate responsive classes and control the behaviour of the grid on the specified screen widths. Please note that adding more breakpoints can greatly increase the amount of output CSS.

Default: **'tiny': 25rem, 'small': 37.5rem, 'medium': 60rem, 'large': 90rem**

### Optional ###
These optional settings add more functionality to the EZPZ grid, but are disabled by default to reduce CSS file size. Simply set any of these variables to **true** to add the feature(s) to the grid. Keep in mind that enabling these settings might significantly increase the size of your CSS file.

```
$ezpz-grid-align
```
Set to true to enable alignment functionality for grid sections.

Default: **false**

```
$ezpz-grid-wrap
```
Set to true to enable wrapping functionality for grid sections.

Default: **false**

```
$ezpz-cell-order
```
Set to true to enable order functionality for cells.

Default: **false**

```
$ezpz-cell-offset
```
Set to true to enable offset functionality for cells.

Default: **false**

```
$ezpz-cell-align
```
Set to true to enable alignment functionality for cells.

Default: **false**

```
$ezpz-gutter-collapse
```
Set to true to enable collapsable gutters for grid sections and cells.

Default: **false**

## Usage ##
The grid is used by applying certain classes to HTML elements. These classes are generated based on the selected options. Most of these classes have been marked optional to reduce CSS file size, but can easily be enabled in the grid setup.

### Grid classes ###
All cells within the grid have to be wrapped by an element with a **.grid class** which acts as a container. Different behaviour can be assigned to this section through the use of the classes below.

#### Default ####

```
.grid
```
Turns an HTML element into a horizontal container for the cells of the grid. This is a **mandatory class**, but can be used in conjunction with modifier classes.

```
.grid--vertical
```
Turns an HTML element into a vertical container for the cells of the grid.

```
.grid--{breakpoint}-horizontal
```
Changes a vertical grid layout back to a horizontal layout from this breakpoint and up.


#### Optional ####

```
.grid--align-start
```
Overrides equal height behaviour. All cells take up their own height and align at the start of the grid section.

```
.grid--align-end
```
Overrides equal height behaviour. All cells take up their own height and align at the end of the grid section.

```
.grid--align-center
```
Overrides equal height behaviour. All cells take up their own height and align at the center of the grid section.

```
.grid--collapsed
```
None of the cells within the grid section will have a gutter.

```
.grid--{breakpoint}-expanded
```
Previously collapsed cells within the grid section will have a gutter from this breakpoint and up.

```
.grid--wrap
```
Forces cells to wrap to a new line if there is no more space to house them in the grid section. Wrapping cell are placed underneath the other cells in the section.

```
.grid--wrap-reverse
```
Forces cells to wrap to a previous line if there is no more space to house them in the grid section. Wrapping cell are placed above the other cells in the section.


### Cell classes ###
Content within the grid can be divided and positioned through the use of elements with a .cell class which have to be directed desendants of a .grid element. Different behaviour can be assigned to these cells through the use of the classes below.

#### Default ####

```
.cell

```
Turns an element into a cell within a grid section. Cell elements have to be direct descendants of a grid element. This is a **mandatory class** for each cell, but can be used in conjunction with modifier classes.

```
.cell--{#}
.cell--{fraction}
```
Controls the amount of horizontal space a cell should occupy in a grid section. This modifier uses either numbers or fractions, based on the selected grid type. These classes are automatically generated based on the amount of grid columns or selected fractions.

#### Optional ####
```
.cell--order-start
```
Places a cell at the start of a grid section, regardless of the placement in the HTML structure.

```
.cell--order-end
```
Places a cell at the end of a grid section, regardless of the placement in the HTML structure.

```
.cell--order-{#}
```
Places a cell at the desired position. These classes are automatically generated based on the amount of grid columns or fractions. Note: The flexbox order property is zero based, so cell--pos-1 outputs order: 0; etc.

```
.cell--offset-#
```
Horizontally offset a cell by a specific number of cell widths/columns. Ie. cell--ofset-3 will offset a cell by 3 cell widths/columns.

```
.cell--align-start
```
Overrides equal height behaviour. A specific cell takes up its own height/width and aligns at the start of the grid section.

```
.cell--align-end
```
Overrides equal height behaviour. A specific cell takes up its own height/width and aligns at the end of the grid section.

```
.cell--align-center
```
Overrides equal height behaviour. A specific cell takes up its own height/width and aligns at the center of the grid section.

```
.cell--collapsed
```
Removes the gutters on a specific cell. Only works in combination with a cell--{#} class to prevent the newly freed space from being taken by other cells in the grid section.

```
.cell--{breakpoint}-expanded
```
A previously collapsed cells will have a gutter from this breakpoint and up.


### Responsive classes ###
In many cases the desired behavior of a grid depends on the available space on a device. The EZPZ Flexbox Grid adheres to a mobile first strategy, and enables you to add breakpoints that generate breakpoint classes that offer more control over the layout on multiple screen sizes. The classes that are generated are based on the selected breakpoints in the $ezpz-breakpoints variable.

The following classes can be altered by adding a breakpoint at the specified position:

```
.grid--{breakpoint}-horizontal
.grid--{breakpoint}-vertical

.grid--{breakpoint}-align-start
.grid--{breakpoint}-align-end
.grid--{breakpoint}-align-center

.grid--{breakpoint}-collapsed
.grid--{breakpoint}-expanded

.cell--{breakpoint}-{#}
.cell--{breakpoint}-{fraction}

.cell--{breakpoint}-order-start
.cell--{breakpoint}-order-end
.cell--{breakpoint}-order-{#}

.cell--{breakpoint}-offset-{#}
.cell--{breakpoint}-offset-{fraction}

.cell--{breakpoint}-align-start
.cell--{breakpoint}-align-end
.cell--{breakpoint}-align-center

.cell--{breakpoint}-collapsed
.cell--{breakpoint}-expanded
```
Previously set behaviour can be overwritten by adding multiple breakpoint classes to an element.

```
<div class="grid grid--vertical grid--small-horizontal">
	<div class="cell cell--small-4 cell--medium-2">Cell</div>
	<div class="cell cell--small-8 cell--medium-10">Cell</div>
</div>
```
In this example the grid will start out in a vertical layout but will change to a horizontal layout as soon as the screen reaches the size set for the 'small' breakpoint or above.

The cells within the grid will both start out taking up half of the available space in the grid section. As soon as the 'small' breakpoint is reached they will take up 4 and 8 columns. When the 'medium' breakpoint is reached they will be divided in a 10 and 2 column fashion.


## Credits ##
* Variable namespacing and the .grid and .cell classes have been inspired by the
[Avalanche CSS grid system](https://github.com/colourgarden/avalanche).
* Multiple cross-browser issues have been resolved through the extremely helpful [Flexbugs](https://github.com/philipwalton/flexbugs) repository.
* [A guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) by Chris Coyier has been a great resource throughout the development of the EZPZ grid.
* Wes Bos' [What the Flexbox](http://flexbox.io) which re-ignited my interest in Flexbox.
* The grid functionality in the example pages has been illustrated through the use of the [Ocean Five color pallete](http://www.colourlovers.com/palette/1473/Ocean_Five) by Designjunkee.

## License ##
The EZPZ Flexbox Grid is licensed under the [MIT License](https://github.com/vicompany/ezpz-flexbox-grid/blob/master/LICENSE).
