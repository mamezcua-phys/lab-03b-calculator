import { addTwoNumbers, subtractTwoNumbers, multiplyTwoNumbers, divideTwoNumbers } from './mathUtils.js' 

const sumInput1 = document.getElementById("sum-input-1");
const sumInput2 = document.getElementById("sum-input-2");
const mySumSpan = document.getElementById("sum-span");

export function handleSum() {
    const value1 = sumInput1.valueAsNumber;
    const value2 = sumInput2.valueAsNumber;
    const sum = addTwoNumbers(value1, value2);
    mySumSpan.textContent = sum;
}

const subInput1 = document.getElementById("sub-input-1");
const subInput2 = document.getElementById("sub-input-2");
const mySubSpan = document.getElementById("sub-span");

export function handleSubtract(){
    const value1 = subInput1.valueAsNumber;
    const value2 = subInput2.valueAsNumber;
    const sub = subtractTwoNumbers(value1, value2);
    mySubSpan.textContent = sub;
}

const mulInput1 = document.getElementById("mul-input-1");
const mulInput2 = document.getElementById("mul-input-2");
const myMulSpan = document.getElementById("mul-span");

export function handleMultiply() {
    const value1 = mulInput1.valueAsNumber;
    const value2 = mulInput2.valueAsNumber;
    const mul = multiplyTwoNumbers(value1, value2);
    myMulSpan.textContent = mul;
}

const divInput1 = document.getElementById("div-input-1");
const divInput2 = document.getElementById("div-input-2");
const myDivSpan = document.getElementById("div-span");

export function handleDivide() {
    const value1 = divInput1.valueAsNumber;
    const value2 = divInput2.valueAsNumber;
    const div = divideTwoNumbers(value1, value2);
    myDivSpan.textContent = div;
}