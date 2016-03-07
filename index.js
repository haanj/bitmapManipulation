'use strict';
const fs = require('fs');
// const controller = require(__dirname + '/lib/controller');
const colorHandler = require(__dirname + '/lib/colorHandler');

function start(){
  let imagePath = (__dirname + '/' + process.argv[2]);
  fs.readFile(imagePath, (err, bitmap) => {
    if (err) throw err;
    let bitmapData = getBitmapData(bitmap);
    colorHandler(bitmap, bitmapData);
  });
}

function getBitmapData(bitmap) {
  let bitmapData = {};
  bitmapData.fileSize = bitmap.readUInt32LE(2);
  bitmapData.pixelArrayStart = bitmap.readUInt32LE(10);
  bitmapData.colorDepth = bitmap.readUInt32LE(28);
  return bitmapData;
}

start();
