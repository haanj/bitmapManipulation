## Bitmap Manipulation Project

This JavaScript package is a command-line tool for manipulating non-palette .bmp images. It was written for a Code Fellows 401 assignment to gain a better understanding of bit manipulation.


## Use

This tool takes 2 arguments. The first is the target image, the second is the desired manipulation. If no manipulation is entered, greyscale is selected by default.

The following transformation commands are supported:

* greyscale
* unblue
* unred
* ungreen
* invert
* darken
* lighten

## Example
```
node index.js bee.bmp invert
```
