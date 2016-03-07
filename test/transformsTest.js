'use strict';
var expect = require('chai').expect;
var transform = require(__dirname + '/../lib/transforms.js');

describe('tests transform.greyscale function', function() {
  it('transform.greyscale(obj) should return obj with colors averaged', function() {
    var arg = {
      blue: 3,
      red: 1,
      green: 2
    };
    var result = transform.greyscale(arg);
    expect(result.blue).to.equal(2);
    expect(result.red).to.equal(2);
    expect(result.green).to.equal(2);
  });
});


describe('tests transform.greyscale function', function() {
  it('transform.greyscale(obj) should return obj with colors averaged', function() {
    var arg = {
      blue: 10,
      red: 150,
      green: 200
    };
    var result = transform.greyscale(arg);
    expect(result.blue).to.equal(120);
    expect(result.red).to.equal(120);
    expect(result.green).to.equal(120);
  });
});

describe('tests transform.unblue function', function() {
  it('transform.unblue(obj) should return obj with obj.blue = 0', function() {
    var arg = {
      blue: 10,
      red: 150,
      green: 200
    };
    var result = transform.unblue(arg);
    expect(result.blue).to.equal(0);
  });
});

describe('tests transform.unred function', function() {
  it('transform.unred(obj) should return obj with obj.red = 0', function() {
    var arg = {
      blue: 10,
      red: 150,
      green: 200
    };
    var result = transform.unred(arg);
    expect(result.red).to.equal(0);
  });
});


describe('tests transform.ungreen function', function() {
  it('transform.ungreen(obj) should return obj with obj.green = 0', function() {
    var arg = {
      blue: 10,
      red: 150,
      green: 200
    };
    var result = transform.ungreen(arg);
    expect(result.green).to.equal(0);
  });
});

describe('tests transform.invert function', function() {
  it('transform.invert(obj) should return obj colors inverted', function() {
    var arg = {
      blue: 10,
      red: 150,
      green: 200
    };
    var result = transform.invert(arg);
    expect(result.blue).to.equal(255-10);
    expect(result.red).to.equal(255-150);
    expect(result.green).to.equal(255-200);
  });
});

describe('tests transform.darken function', function() {
  it('transform.darken(obj) should return obj colors darkened', function() {
    var arg = {
      blue: 10,
      red: 150,
      green: 200
    };
    var result = transform.darken(arg);
    expect(result.blue).to.equal(0.5 *10);
    expect(result.red).to.equal(0.5 *150);
    expect(result.green).to.equal(0.5 *200);
  });
});

describe('tests transform.lighten function', function() {
  it('transform.lighten(obj) should return obj colors lightened', function() {
    var arg = {
      blue: 10,
      red: 150,
      green: 200
    };
    var result = transform.lighten(arg);
    expect(result.blue).to.equal((255 - 10) * 0.5 + 10);
    expect(result.red).to.equal((255 - 150) * 0.5 + 150);
    expect(result.green).to.equal((255 - 200) * 0.5 + 200);
  });
});
