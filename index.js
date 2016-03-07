'use strict';
const fs = require('fs');
// const controller = require(__dirname + '/lib/controller');
const colorHandler = require(__dirname + '/lib/colorHandler');


function start(){
  let imagePath = (__dirname + '/' + process.argv[2]);

  let bitmap = fs.readFileSync(imagePath);
  let bitmapData = getBitmapData(bitmap);
  colorHandler(bitmap, bitmapData);
}

// fs.readFile('/etc/passwd', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

function getBitmapData(bitmap) {
  let bitmapData = {};
  bitmapData.fileSize = bitmap.readUInt32LE(2);
  bitmapData.pixelArrayStart = bitmap.readUInt32LE(10);
  bitmapData.colorDepth = bitmap.readUInt32LE(28);
  return bitmapData;
}


start();
