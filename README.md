# Loading Indicator
This web client was developed by Matome for the purposes of demostrating the use of angularJS loading indicator.

## Technology

This application uses the following technology stack:

 * [AngularJS](https://angularjs.org/)
 * [Grunt](https://gruntjs.com/getting-started)
 * [standard](https://atom.io/packages/linter-js-standard)

## Developers Guide

### Installation

To run this application you should have node already installed.

**[1] Clone the repository**:

```
https://github.com/mrjvanniekerk/loadingindicator.git
```

**[2] Open the project using any IDE, I used sublime. Make sure you have standard linter installed**:

```
The code base does not contain semi-colons at the end of definitions. This is because of the Javacript
linter called standard.
```

**[3] To run this on the browser, just go to the directory(root) where the project is cloned and run grunt serve
then copy and paste this url on any browser http://localhost:9000/index.html**:

```
The project waits five seconds before loading data. This was done intentionally so that the indicator may be displayed. After 5 seconds a list of names should appear
```

