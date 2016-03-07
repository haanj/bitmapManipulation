'use strict';
const fs = require('fs');
const controller = require(__dirname + '/controller');

function changeColorCodes(bitmap, bitmapData) {
  let transform = controller();

  for (let i = bitmapData.pixelArrayStart; i < bitmap.length - 2; i = i + 3) {
    let colorCodes = readColorCodes(bitmap, i);
    transform(colorCodes);
    writeColorCodes(bitmap, colorCodes, i);
  }
  outputImage(bitmap);
}

function readColorCodes(bitmap, i) {
  let colorCodes = {};
  colorCodes.blue = bitmap.readUInt8(i);
  colorCodes.green = bitmap.readUInt8(i + 1);
  colorCodes.red = bitmap.readUInt8(i + 2);
  return colorCodes;
}

function writeColorCodes(bitmap, colorCodes, i){
  bitmap.writeUInt8(colorCodes.blue, i);
  bitmap.writeUInt8(colorCodes.green, i + 1);
  bitmap.writeUInt8(colorCodes.red, i + 2);
}

function outputImage(bitmap) {
  console.log('Printing new image');
  fs.writeFileSync(__dirname + '/../output/newImage.bmp', bitmap);
}

module.exports = changeColorCodes;
