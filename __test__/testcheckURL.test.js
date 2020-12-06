// Import the js file to test
const checkURL = require('../src/client/js/checkURL');

// import {
//   checkURL
// } from "../src/client/js/checkURL"

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the submit functionality", () => {
  // The test() function has two arguments - a string description, and an actual test as a callback function.  
  test("Testing HTTPS", () => {
    // Define the input for the function, if any, in the form of variables/array
    const testUrl = 'https://bahodir-media.uz';
    // Define the expected output, if any, in the form of variables/array
    const expected = [testUrl];
    // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
    // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
    expect(checkURL.checkURL(testUrl)).toStrictEqual(expected);
  })
  test("Testing HTTP", () => {
    const testUrl = 'http://bahodir-media.uz';
    const expected = [testUrl];
     expect(checkURL.checkURL(testUrl)).toStrictEqual(expected);
  })
  test("Testing HTTP", () => {
    const testUrl = 'http://bahodir-media.uz';
    const expected = [testUrl];
     expect(checkURL.checkURL(testUrl)).toStrictEqual(expected);
  })
  
  test("Website without domain", () => {
    const testUrl = 'https://.uz';
    expect(checkURL.checkURL(testUrl)).toBe(null);
})
  test("Website without protocol", () => {
    const testUrl = 'bahodir-media.uz';
    expect(checkURL.checkURL(testUrl)).toBe(null);
})
  test("Website without slash in HTTPS", () => {
    const testUrl = 'https:bahodir-media.uz';
    expect(checkURL.checkURL(testUrl)).toBe(null);
})
  test("Website without slash in HTTP", () => {
    const testUrl = 'http:bahodir-media.uz';
    expect(checkURL.checkURL(testUrl)).toBe(null);
})
  test("Empty URl", () => {
    const testUrl = ' ';
    expect(checkURL.checkURL(testUrl)).toBe(null);
})
});