'use strict';
const fs = require('fs');

let transform = process.argv[2];
let bitmap = fs.readFileSync(__dirname + '/' + process.argv[3]);
