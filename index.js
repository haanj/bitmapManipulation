'use strict';
const fs = require('fs');
const controller = require(__dirname + '/lib/controller');


function start(){
  let imagePath = (__dirname + '/' + process.argv[2]);

  let bitmap = fs.readFileSync(imagePath);
  let bitmapData = getBitmapData(bitmap);
  changeColorCodes(bitmap, bitmapData);
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

function changeColorCodes(bitmap, bitmapData) {
  let transform = controller();

  for (let i = bitmapData.pixelArrayStart; i < bitmap.length - 3; i = i + 3) {
    let colorCodes = {};
    colorCodes.blue = bitmap.readUInt8(i);
    colorCodes.green = bitmap.readUInt8(i + 1);
    colorCodes.red = bitmap.readUInt8(i + 2);

    transform(colorCodes);

    bitmap.writeUInt8(colorCodes.blue, i);
    bitmap.writeUInt8(colorCodes.green, i + 1);
    bitmap.writeUInt8(colorCodes.red, i + 2);
  }
  fs.writeFileSync(__dirname + '/output/newImage.bmp', bitmap);
}

start();
