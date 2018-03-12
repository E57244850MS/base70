import {toBase70, fromBase70} from './index';
// const {toBase70, fromBase70} = require('./index');

// 0123456789012345678901234567890123456789012345678901234567890123456789
// !'()*.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~
describe('toBase70', () => {
  it('convert dec < 70', () => {
    expect(toBase70(0)).toBe('!');
    expect(toBase70(69)).toBe('~');
    expect(toBase70(6)).toBe('0');
  });

  it('convert dec >= 70', () => {
    expect(toBase70(70)).toBe('\'!');
    expect(toBase70(77)).toBe('\'1');
  });

  it('convert big numbers', () => {
    expect(toBase70(9007199254740991)).toBe('9agw30CzP');
  });

  it('supports base < 70', () => {
    expect(toBase70(0, 20)).toBe('!');
    expect(toBase70(19, 20)).toBe('D');
    expect(toBase70(6, 20)).toBe('0');
    expect(toBase70(20, 20)).toBe('\'!');
    expect(toBase70(27, 20)).toBe('\'1');
  });

  // @TODO: add tests for base > 70
  // @TODO: add tests for argument NaN

});

describe('fromBase70', () => {
  it('convert base70 < 70', () => {
    expect(fromBase70('!')).toBe(0);
    expect(fromBase70('~')).toBe(69);
    expect(fromBase70('0')).toBe(6);
  });

  it('convert base70 >= 70', () => {
    expect(fromBase70('\'!')).toBe(70);
    expect(fromBase70('\'1')).toBe(77);
  });

  it('convert from big numbers', () => {
    expect(fromBase70('9agw30CzP')).toBe(9007199254740991);
  });

  it('supports base < 70', () => {
    expect(fromBase70('!', 20)).toBe(0);
    expect(fromBase70('D', 20)).toBe(19);
    expect(fromBase70('0', 20)).toBe(6);
    expect(fromBase70('\'!', 20)).toBe(20);
    expect(fromBase70('\'1', 20)).toBe(27);
  });

  // @TODO: add tests for base > 70
  // @TODO: add tests for argument NaN
  
});
