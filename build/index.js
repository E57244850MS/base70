'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBase70 = toBase70;
exports.fromBase70 = fromBase70;

// url friendly charachters
var BASE_CHARS = "!'()*.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~";
var BASE_MAX = BASE_CHARS.length;
// generate {"!": 0, "'": 1, ...}
var CHAR_INDEX_MAP = BASE_CHARS.split('').reduce(function (map, char, index) {
  map[char] = index;
  return map;
}, {});
var validateRadix = function validateRadix(radix) {
  if (radix < 0 || radix > BASE_MAX) {
    throw new Error('Radix out of bounds');
  }
};

function converDecToBase70(value, radix) {
  var _res = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (value < 1) {
    if (_res.length) {
      return _res;
    } else {
      return BASE_CHARS[0];
    }
  }

  var i = Math.floor(value / radix);
  var rem = value - i * radix;
  var c = BASE_CHARS[rem];

  return converDecToBase70(i, radix, c + _res);
}

/**
 * Convert dec to base70 string
 * @param {number} a 
 * @param {number} radix - [0..70]
 * @returns {string}
 */
function toBase70(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : BASE_MAX;

  validateRadix();

  return converDecToBase70(value, radix);
}

/**
 * Convert base70 string to dec
 * @param {string} value 
 * @param {number} radix 
 */
function fromBase70(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : BASE_MAX;

  validateRadix();

  var chars = value.split('');
  var count = chars.length;
  return chars.reduceRight(function (acc, v, i) {
    return acc + CHAR_INDEX_MAP[v] * Math.pow(radix, count - i - 1);
  }, 0);
}