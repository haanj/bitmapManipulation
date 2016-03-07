'use strict';
const t = require(__dirname + '/transforms.js');

function controller() {
  console.log(process.argv[3] + ' transformation selected');
  switch(process.argv[3]) {
  case 'greyscale':
    return t.greyscale;
  case 'unblue':
    return t.unblue;
  case 'unred':
    return t.unred;
  case 'ungreen':
    return t.ungreen;
  case 'invert':
    return t.invert;
  case 'darken':
    return t.darken;
  case 'lighten':
    return t.lighten;
  default:
    return t.greyscale;
  }
}

module.exports = controller;
