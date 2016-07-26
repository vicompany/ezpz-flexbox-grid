[![Build Status](https://travis-ci.org/vicompany/ezpz-flexbox-grid.svg?branch=%239-CSS-Unit-tests)](https://travis-ci.org/vicompany/ezpz-flexbox-grid)

# EZPZ Flexbox Grid

A lightweight Sass (.scss) flexbox grid system that's easy to setup and offers a lot of customisation. By [VI Company](http://www.vicompany.nl)

## Features
* Easy peasy to setup and use
* Works in all [modern browsers & IE11](http://caniuse.com/#search=flex)
* IE10 when using [Autoprefixer](https://github.com/postcss/autoprefixer)
* Uses [BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) for grid classes
* Many optional features to reduce CSS bloat
* Define and use columns or fractions
* Infinite nesting
* Create and name your own breakpoints
* Custom namespacing

## Documentation
- [Installation](docs/installation.md)
- [Settings](docs/settings.md)
- [CSS usage](docs/css-usage.md)
- [Mixins usage](docs/mixins-usage.md)

## Demo
* [Default features](http://vicompany.github.io/ezpz-flexbox-grid/)
* [Optional features](http://vicompany.github.io/ezpz-flexbox-grid/optional-features.html)
* [Responsive features](http://vicompany.github.io/ezpz-flexbox-grid/responsive-features.html)
* [Using fractions](http://vicompany.github.io/ezpz-flexbox-grid/fractions.html)
* [Using mixins](http://vicompany.github.io/ezpz-flexbox-grid/mixins.html)

## What about older browsers?
The aim of the EZPZ Flexbox Grid is to offer an easy to use grid system that takes abundant calculations and classes out of your workflow by leveraging flexbox' "awareness" of available space within a section.

Unfortunately, legacy browsers like IE9 and below do not support the flexbox syntax and won't be able to use these properties. To maintain simplicity, reduce code bloat and in the light of [Microsoft's decision to stop support for IE10 and below](https://www.microsoft.com/en-us/WindowsForBusiness/End-of-IE-support), the decision has been made to not support older browsers.

## Contributing
### Test
```
npm install
npm test
```

### Get in touch
- Bugs / Suggestions: [open an issue](https://github.com/vicompany/ezpz-flexbox-grid/issues)
- Twitter: [@vicompany](https://twitter.com/vicompany)

## Credits
* Variable namespacing and the .grid and .cell classes have been inspired by the
[Avalanche CSS grid system](https://github.com/colourgarden/avalanche).
* Multiple cross-browser issues have been resolved through the extremely helpful [Flexbugs](https://github.com/philipwalton/flexbugs) repository.
* [A guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) by Chris Coyier has been a great resource throughout the development of the EZPZ grid.
* Wes Bos' [What the Flexbox](http://flexbox.io) which re-ignited my interest in Flexbox.
* The grid functionality in the example pages has been illustrated through the use of the [Ocean Five color pallete](http://www.colourlovers.com/palette/1473/Ocean_Five) by Designjunkee.

## License
The EZPZ Flexbox Grid is licensed under the [MIT License](LICENSE.md).
