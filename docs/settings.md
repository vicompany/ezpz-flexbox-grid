# EZPZ Flexbox grid Documentation

[Documentation](docs.md) > Settings

# Settings
These variables control the generated CSS for the EZPZ grid and can be set to fit your own preferred values.

## Mandatory

### $ezpz-auto-generate: (bool);

Set to false if you want to prevent the grid to autogenerate grid classes. Usefull if you want to generate your own grid classes with help of [the grid mixins](mixins.md).

Default: **true**

```sass
$ezpz-auto-generate: true;
```

### $ezpz-namespace: (string);

The namespace for the grid sections of the ezpz grid. Changing this variable will automatically change all the grid classes to the new namespace.

Default: **'.grid'**

```sass
$ezpz-namespace: '.grid';
```

### $ezpz-cell-namespace: (string);

The namespace for the grid cell sections of the ezpz grid. Changing this variable will automatically change all the grid cell classes to the new namespace.

Default: **'.cell'**

```sass
$ezpz-cell-namespace: '.cell';
```

### $ezpz-grid-default-wrap: (string);

The default wrap type for the grid. This variable can be set to **'nowrap'**, **'wrap'** or **'reverse'**. Changing this variable will change the way cells wrap within a grid section on smaller screensizes, overwriting the default non wrapping behaviour.


Default: **'nowrap'**

```sass
$ezpz-grid-default-wrap: 'nowrap';
```

### $ezpz-grid-default-align: (string);

The default alignment behaviour of the grid. This variable can be set to **'stretch'**, **'start'**, **'center'**, **'end'** or **'baseline'**. Changing this variable will change the way cells are aligned within a grid section, overwriting the default stretching behaviour.


Default: **'stretch'**

```sass
$ezpz-grid-default-align: 'stretch';
```

### $ezpz-grid-default-content-stretch: (string);

The default stretching behaviour of direct child elements of a grid cell. This variable can be set to **'unstretch'** or **'stretch'**. Changing this variable will ensure that all the direct children of a cell  within a grid section will stretch to occupy the full width and height of the cell, overwriting the default non-stretching behaviour.


Default: **'unstretch'**

```sass
$ezpz-grid-default-content-stretch: 'unstretch';
```

### $ezpz-gutter: (string);

The amount of horizontal space the gutter between 2 cells will occupy. Changing this variable will change the amount of space a gutter occupies.

Default: **'1rem'**

```sass
$ezpz-gutter: 1rem;
```

### $ezpz-fractions: (numerator:denominator);

When $ezpz-grid-type is set to 'fractions' this variable controls the amount of space that a cell will horizontally occupy in a grid section. Changing this variable will automatically generate the proper .cell--{fraction} classes.

Default: **(1:2), (1:3), (2:3), (1:4), (3:4)**

```sass
$ezpz-fractions: (1:2), (1:3), (2:3), (1:4), (3:4);
```

### $ezpz-breakpoints: ('key': value);

The breakpoint names and sizes that will be used to generate responsive classes and control the behaviour of the grid on the specified screen widths. Please note that adding more breakpoints can greatly increase the amount of output CSS.

Default: **('tiny': 25rem, 'small': 37.5rem, 'medium': 60rem, 'large': 90rem)**

```sass
$ezpz-breakpoints: (
    'tiny': 25rem,
    'small': 37.5rem,
    'medium': 60rem,
    'large': 90rem
);
```

## Optional
These optional settings add more functionality to the EZPZ grid, but are disabled by default to reduce CSS file size. Simply set any of these variables to **true** to add the feature(s) to the grid. Keep in mind that enabling these settings might significantly increase the size of your CSS file. These settings are only used if ```$ezpz-auto-generate``` is set to true.

### $ezpz-grid-align: (bool);

Set to true to enable alignment functionality for grid sections.

Default: **false**

```sass
$ezpz-grid-align: false;
```

### $ezpz-grid-wrap: (bool);

Set to true to enable wrapping functionality for grid sections.

Default: **false**

```sass
$ezpz-grid-wrap: false;
```

### $ezpz-cell-order: (bool);

Set to true to enable order functionality for cells.

Default: **false**

```sass
$ezpz-cell-order: false;
```

### $ezpz-cell-offset: (bool);

Set to true to enable offset functionality for cells.

Default: **false**

```sass
$ezpz-cell-offset: false;
```

### $ezpz-cell-align: (bool);

Set to true to enable alignment functionality for cells.

Default: **false**

```sass
$ezpz-cell-align: false;
```

### $ezpz-gutter-collapse: (bool);

Set to true to enable collapsable gutters for grid sections and cells.

Default: **false**

```sass
$ezpz-gutter-collapse: false;
```


## Next
* [CSS usage](css-usage.md)
