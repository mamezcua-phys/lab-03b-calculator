// IMPORT MODULES under test here:
// import { example } from '../example.js';
import {addTwoNumbers, subtractTwoNumbers, multiplyTwoNumbers, divideTwoNumbers} from '../mathUtils.js'

const test = QUnit.test;

// Tests for adding two numbers
test('addTwoNumbers should return 19 if passed 8 and 11', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 19;
    const Number1 = 8;
    const Number2 = 11;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addTwoNumbers(Number1, Number2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('addTwoNumbers should return 11 if passed 5 and 6', (expect)=>{
    const expected = 11;
    const Number1 = 5;
    const Number2 = 6;
    const actual = addTwoNumbers(Number1, Number2);
    expect.equal(actual, expected);
})

// Tests for subtracting two numbers
test('subtractTwoNumbers should return -1 if passed 5 and 6', (expect)=>{
    const expected = -1;
    const Number1 = 5;
    const Number2 = 6;
    const actual = subtractTwoNumbers(Number1, Number2);
    expect.equal(actual, expected);
})

test('subtractTwoNumbers should return 6 if passed 9 and 3', (expect)=>{
    const expected = 6;
    const Number1 = 9;
    const Number2 = 3;
    const actual = subtractTwoNumbers(Number1, Number2);
    expect.equal(actual, expected);
})

// Tests for multiplying two numbers
test('multiplyTwoNumbers should return 28 if passed 4 and 7', (expect)=>{
    const expected = 28;
    const Number1 = 4;
    const Number2 = 7;
    const actual = multiplyTwoNumbers(Number1, Number2);
    expect.equal(actual, expected);
})

test('multiplyTwoNumbers should return 42 if passed 7 and 6', (expect)=>{
    const expected = 42;
    const Number1 = 7;
    const Number2 = 6;
    const actual = multiplyTwoNumbers(Number1, Number2);
    expect.equal(actual, expected);
})

// Tests for dividing two numbers
test('divideTwoNumbers should return 8 if passed 72 and 9', (expect)=>{
    const expected = 8;
    const Number1 = 72;
    const Number2 = 9;
    const actual = divideTwoNumbers(Number1, Number2);
    expect.equal(actual, expected);
})

test('divideTwoNumbers should return 6 if passed 36 and 6', (expect)=>{
    const expected = 6;
    const Number1 = 36;
    const Number2 = 6;
    const actual = divideTwoNumbers(Number1, Number2);
    expect.equal(actual, expected);
})