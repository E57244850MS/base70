
// url friendly charachters
const BASE_CHARS = "!'()*.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~"
const BASE_MAX = BASE_CHARS.length;
// generate {"!": 0, "'": 1, ...}
const CHAR_INDEX_MAP = BASE_CHARS
  .split('')
  .reduce((map, char, index) => {
    map[char] = index;
    return map;
  }, {});
const validateRadix = radix => {
  if (radix < 0 || radix > BASE_MAX) {
    throw new Error('Radix out of bounds');
  }
};

function converDecToBase70(value, radix, _res='') {
  if (value < 1) {
    if (_res.length) {
      return _res;
    } else {
      return BASE_CHARS[0];
    }
  }

  const i = Math.floor(value / radix);
  const rem = value - i * radix;
  const c = BASE_CHARS[rem];

  return converDecToBase70(i, radix, c + _res);
}

/**
 * Convert dec to base70 string
 * @param {number} a 
 * @param {number} radix - [0..70]
 * @returns {string}
 */
export function toBase70(value, radix=BASE_MAX) {
  validateRadix();

  return converDecToBase70(value, radix)
}

/**
 * Convert base70 string to dec
 * @param {string} value 
 * @param {number} radix 
 */
export function fromBase70(value, radix=BASE_MAX) {
  validateRadix();

  const chars = value.split('');
  const count = chars.length;
  return chars
    .reduceRight((acc, v, i) => acc + CHAR_INDEX_MAP[v] * Math.pow(radix, count - i - 1), 0);
}
