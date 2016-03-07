'use strict';

var transform = {};

transform.greyscale = function(colorCodes) {
  let average = (colorCodes.blue + colorCodes.green + colorCodes.red) / 3;
  colorCodes.blue = colorCodes.red = colorCodes.green = average;
  return colorCodes;
};

transform.unblue = function(colorCodes){
  colorCodes.blue = 0;
  return colorCodes;
};

transform.unred = function(colorCodes){
  colorCodes.red = 0;
  return colorCodes;
};

transform.ungreen = function(colorCodes){
  colorCodes.green = 0;
  return colorCodes;
};

transform.invert = function(colorCodes){
  colorCodes.blue = 255 - colorCodes.blue;
  colorCodes.red = 255 - colorCodes.red;
  colorCodes.green = 255 - colorCodes.green;
  return colorCodes;
};

transform.darken = function(colorCodes){
  colorCodes.blue = 0.5 * colorCodes.blue;
  colorCodes.red = 0.5 * colorCodes.red;
  colorCodes.green = 0.5 * colorCodes.green;
  return colorCodes;
};

transform.lighten = function(colorCodes){
  colorCodes.blue = (255 - colorCodes.blue) * 0.5 + colorCodes.blue;
  colorCodes.red = (255 - colorCodes.red) * 0.5 + colorCodes.red;
  colorCodes.green = (255 - colorCodes.green) * 0.5 + colorCodes.green;
  return colorCodes;
};


module.exports = transform;
