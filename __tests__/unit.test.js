// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

//isPhoneNumber tests
describe('isPhoneNumber', () => {
  //false test for phone number with incorrect length
  test('invalid phone number with not enough numbers', () => {
    expect(isPhoneNumber('309-46-6750')).toBe(false);
  });

  //false test for invalid phone number
  test('invalid phone number with letters and numbers', () => { 
    expect(isPhoneNumber('340-a90-fff4')).toBe(false);
  });

  //true test for phone number correct number of dashes
  test('valid phone number with dashes', () => {
    expect(isPhoneNumber('909-495-4902')).toBe(true);
  });

  //true test for phone number with 10 numbers
  test('valid phone number with length of 10', () => {
    expect(isPhoneNumber('909-349-5804')).toBe(true);
  });
});

describe('isEmail', () =>{
  //false test for email without '@'
  test('invalid email without @ symbol', () => {
    expect(isEmail('user30.com')).toBe(false);
  });

  //false test for email without '.'
  test('invalid email without .', () => {
    expect(isEmail('user39com')).toBe(false);
  });

  //true test for email ending with .com
  test('valid email ending in .com', () => {
    expect(isEmail('user20@email.com')).toBe(true);
  });

  //true test for email using only one @
  test('valid email using only 1 @ symbol', () => {
    expect(isEmail('user34@email.com')).toBe(true);
  });
});

describe('isStrongPassword', () => {
  //false test for password starting with number
  test('invalid password starting with a number', () => {
    expect(isStrongPassword('1bufie')).toBe(false);
  });

  // false test for password less than 4 characters
  test('invalid password with length less than 4', () => {
    expect(isStrongPassword('fj')).toBe(false);
  });

  //true test for password that is less than 15 characters
  test('valid password less than 15 characters', () => {
    expect(isStrongPassword('h8ehfui')).toBe(true);
  });

  //true test for password that uses underscore
  test('valid password using underscore', () => {
    expect(isStrongPassword('f903_fh')).toBe(true);
  });
});

describe('isDate', () => {
  //false test for date using letters
  test('invalid date using letters', () => {
    expect(isDate('Dec 12, 2024')).toBe(false);
  });

  //false test for date in YYYY/XX/XX format
  test('invalid date in wrong format', () => {
    expect(isDate('2029/1/3')).toBe(false);
  });

  //true test for date in XX/XX/YYYY format 
  test('valid date in right format', () => {
    expect(isDate('12/11/2020')).toBe(true);
  });

  //true test for date using single number format
  test('valid date with single digit month/day', () => {
    expect(isDate('1/1/2020')).toBe(true);
  });
});

describe('isHexColor', () => {
  //false test for hex of length 4
  test('invalid hex value with length 4', () => {
    expect(isHexColor('#182A')).toBe(false);
  });
  
  //false test for hex with letters out of a-f range
  test('invalid hex value with incorrect letters', () => {
    expect(isHexColor('#G89B89')).toBe(false);
  });

  //true test for hex value of length 6
  test('valid hex value with length 6', () => {
    expect(isHexColor('#A4B9C0')).toBe(true);
  });

  //true test for hex value using lowercase
  test('valid hex using lowercase', () => {
    expect(isHexColor('#1a2b0c')).toBe(true);
  });
});