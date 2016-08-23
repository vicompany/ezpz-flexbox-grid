# EZPZ Flexbox grid Documentation

[Documentation](docs.md) > Usage

# Usage
The grid is used by applying certain classes to HTML elements. These classes are generated based on the selected options. Most of these classes have been marked optional to reduce CSS file size, but can easily be enabled in the grid setup.

## Grid classes
All cells within the grid have to be wrapped by an element with a **.grid class** which acts as a container. Different behaviour can be assigned to this section through the use of the classes below.

| class | description
| --- | ---
| ```.grid```<br>```.grid--horizontal```<br>```.grid--{breakpoint}-horizontal``` | Turns an HTML element into a horizontal container for the cells of the grid. This is a **mandatory class**, but can be used in conjunction with modifier classes.
| ```.grid--vertical```<br>```.grid--{breakpoint}-vertical``` | Turns an HTML element into a vertical container for the cells of the grid.

### Optional
#### Grid align
| class | description
| --- | ---
| ```.grid--align-start```<br>```.grid--{breakpoint}-align-start``` | Overrides equal height behaviour.<br>All cells take up their own height and align at the **start** of the grid section.
| ```.grid--align-end```<br>```.grid--{breakpoint}-align-end``` | Overrides equal height behaviour.<br>All cells take up their own height and align at the **end** of the grid section.
| ```.grid--align-center```<br>```.grid--{breakpoint}-align-center``` | Overrides equal height behaviour.<br>All cells take up their own height and align at the **center** of the grid section.
| ```.grid--align-stretch```<br>```.grid--{breakpoint}-align-stretch``` | Default.<br>All cells **stretch** to the top and bottom of the grid section.

#### Grid collapse
| class | description
| --- | ---
| ```.grid--collapsed```<br>```.grid--{breakpoint}-collapsed``` | None of the cells within the grid section will have a gutter.
| ```.grid--expanded```<br>```.grid--{breakpoint}-expanded``` | Cells within the grid section will have a gutter.

#### Grid wrap
| class | description
| --- | ---
| ```.grid--wrap```<br>```.grid--{breakpoint}-wrap``` | Forces cells to wrap to a **new line** if there is no more space to house them in the grid section. Wrapping cell are placed underneath the other cells in the section.
| ```.grid--wrap-reverse```<br>```.grid--{breakpoint}-wrap-reverse``` | Forces cells to wrap to a **previous line** if there is no more space to house them in the grid section. Wrapping cell are placed above the other cells in the section.
| ```.grid--nowrap```<br>```.grid--{breakpoint}-nowrap``` | Default.<br> Grid sections that have been previously set to wrap will no longer wrap from this breakpoint and up.

## Cell classes
Content within the grid can be divided and positioned through the use of elements with a ```.cell``` class which have to be directed desendants of a ```.grid``` element. Different behaviour can be assigned to these cells through the use of the classes below.

| class | description
| --- | ---
| ```.cell``` | Turns an element into a cell within a grid section. Cell elements have to be direct descendants of a grid element. This is a **mandatory class** for each cell, but can be used in conjunction with modifier classes. By default direct child elements placed within a cell will try to take up the same height as the cell itself. This behaviour can be changed by using the various alignment classes.
| ```.cell--{#}```<br>```.cell--{breakpoint}-{#}```<br>```.cell--{fraction}```<br>```.cell--{breakpoint}-{fraction}``` | Controls the amount of horizontal space a cell should occupy in a grid section. This modifier uses either numbers or fractions, based on the selected grid type. These classes are automatically generated based on the amount of grid columns or selected fractions.

### Optional

#### Cell order
| class | description
| --- | ---
| ```.cell--order-start```<br>```.cell--{breakpoint}-order-start``` | Places a cell at the **start** of a grid section, regardless of the placement in the HTML structure.
| ```.cell--order-end```<br>```.cell--{breakpoint}-order-end``` | Places a cell at the **end** of a grid section, regardless of the placement in the HTML structure.
| ```.cell--order-{#}```<br>```.cell--{breakpoint}-order-{#}``` | Places a cell at the desired position. These classes are automatically generated based on the amount of grid columns or fractions. Note: The flexbox order property is zero based, so ```.cell--order-1``` outputs ```order: 0;``` etc.

#### Cell offset
| class | description
| --- | ---
| ```.cell--offset-#```<br>```.cell--{breakpoint}-offset-#``` | Horizontally offset a cell by a specific number of cell widths/columns. Ie. ```.cell--offset-3``` will offset a cell by 3 cell widths/columns.

#### Cell align
| class | description
| --- | ---
| ```.cell--align-start```<br>```.cell--{breakpoint}-align-start``` | Overrides equal height behaviour. A specific cell takes up its own height/width and aligns at the **start** of the grid section.
| ```.cell--align-end```<br>```.cell--{breakpoint}-align-end``` | Overrides equal height behaviour. A specific cell takes up its own height/width and aligns at the **end** of the grid section.
| ```.cell--align-center```<br>```.cell--{breakpoint}-align-center``` | Overrides equal height behaviour. A specific cell takes up its own height/width and aligns at the **center** of the grid section.
| ```.cell--align-stretch```<br>```.cell--{breakpoint}-align-stretch``` | Default. A specific cell **stretch** to the top and bottom of the grid section.

#### Cell collapse
| class | description
| --- | ---
| ```.cell--collapsed```<br>```.cell--{breakpoint}-collapsed``` | Removes the gutters on a specific cell. Only works in combination with a ```.cell--{#}``` class to prevent the newly freed space from being taken by other cells in the grid section.
| ```.cell--expanded```<br>```.cell--{breakpoint}-expanded``` | Adds the gutters on a specific cell.


### Responsive classes
In many cases the desired behavior of a grid depends on the available space on a device. The EZPZ Flexbox Grid adheres to a mobile first strategy, and enables you to add breakpoints that generate breakpoint classes that offer more control over the layout on multiple screen sizes. The classes that are generated are based on the selected breakpoints in the $ezpz-breakpoints variable.

Previously set behaviour can be overwritten by adding multiple breakpoint classes to an element.

```html
<div class="grid grid--vertical grid--small-horizontal">
    <div class="cell cell--small-4 cell--medium-2">Cell</div>
    <div class="cell cell--small-8 cell--medium-10">Cell</div>
</div>
```
In this example the grid will start out in a vertical layout but will change to a horizontal layout as soon as the screen reaches the size set for the 'small' breakpoint or above.

The cells within the grid will both start out taking up half of the available space in the grid section. As soon as the 'small' breakpoint is reached they will take up 4 and 8 columns. When the 'medium' breakpoint is reached they will be divided in a 10 and 2 column fashion.

## Demo
For a more in-depth explanation with examples please visit [the demo](http://vicompany.github.io/ezpz-flexbox-grid/index.html).

## Optional
* [Use the grid with mixins](mixins-usage.md)
