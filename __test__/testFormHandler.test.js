const handleSubmit = require('../src/client/js/formHandler');

// Import the js file to test
// import {
//   handleSubmit
// } from "../src/client/js/handleSubmit"


// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the submit functionality", () => {
  // The test() function has two arguments - a string description, and an actual test as a callback function.  
  test("Testing the handleSubmit() function", () => {
    // Define the input for the function, if any, in the form of variables/array
    const scoreTag = 'P+';
    // Define the expected output, if any, in the form of variables/array
    const expected = 'strong positive';
    // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
    // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
    expect(handleSubmit.handleSubmit(scoreTag)).toStrictEqual(expected);
  })
  
  test("Testing the handleSubmit() function", () => {
    const scoreTag = 'P';
    const expected = 'positive';
    expect(handleSubmit.handleSubmit(scoreTag)).toStrictEqual(expected);
  })
  
  test("Testing the handleSubmit() function", () => {
    const scoreTag = 'NEU';
    const expected = 'neutral';
    expect(handleSubmit.handleSubmit(scoreTag)).toStrictEqual(expected);
  })
  
  test("Testing the handleSubmit() function", () => {
    const scoreTag = 'N';
    const expected = 'negative';
    expect(handleSubmit.handleSubmit(scoreTag)).toStrictEqual(expected);
  })
  
  test("Testing the handleSubmit() function", () => {
    const scoreTag = 'N+';
    const expected = 'strong negative';
    expect(handleSubmit.handleSubmit(scoreTag)).toStrictEqual(expected);
  })
  
  test("Testing the handleSubmit() function", () => {
    const scoreTag = 'NONE';
    const expected = 'without sentiment';
    expect(handleSubmit.handleSubmit(scoreTag)).toStrictEqual(expected);
  })
});