'use strict';
const fs = require('fs');



let bitmap = fs.readFileSync(__dirname + '/' + process.argv[2]);
let bitmapData = {};

// bitmapData.headerField = bitmap.toString('ascii', 0, 2);
bitmapData.fileSize = bitmap.readUInt32LE(2); // maybe ditch, might not need
bitmapData.pixelArrayStart = bitmap.readUInt32LE(10);
bitmapData.colorDepth = bitmap.readUInt32LE(28);
bitmapData.compressionMethod = bitmap.readUInt32LE(30);
// bitmapData.imageSize = bitmap.readUInt32LE(34);
// bitmapData.imageWidth = bitmap.readUInt32LE(18);
// bitmapData.paletteColors = bitmap.readUInt32LE(46);
// http://www.i-programmer.info/programming/javascript/2550-javascript-bit-manipulation.html?start=1
bitmapData.pixelArrayData = [];


console.dir(bitmapData);

// TODO: EDIT image
for (var i = bitmapData.pixelArrayStart; i < bitmap.length - 3;  i = i + 3) {

  var blue = bitmap.readUInt8(i);
  console.log('blue:   ', blue);

  var green = bitmap.readUInt8(i + 1);
  console.log('green:   ', green);

  var red = bitmap.readUInt8(i + 2);
  console.log('red:   ', red);

  // var colorCode4 = bitmap.readUInt8(i + 3);
  // console.log('colorcode4:   ', colorCode4);
  var average = (blue + green + red) / 3;

  // bitmap.writeUInt8(blue, i);
  // bitmap.writeUInt8(green, i + 1);
  // bitmap.writeUInt8(red, i + 2);
  // bitmap.writeUInt8(colorCode4, i + 3);
  bitmap.writeUInt8(average, i);
  bitmap.writeUInt8(average, i + 1);
  bitmap.writeUInt8(average, i + 2);


}


// DONE: write buffer to file
fs.writeFileSync(__dirname + '/output/newImage.bmp', bitmap);
