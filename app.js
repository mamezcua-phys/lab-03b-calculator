import { handleSum, handleSubtract, handleMultiply, handleDivide } from './handlers.js'

const mySumButton = document.getElementById("sum-button");
const mySubButton = document.getElementById("sub-button");
const myMulButton = document.getElementById("mul-button");
const myDivButton = document.getElementById("div-button");


mySumButton.addEventListener('click', handleSum);
mySubButton.addEventListener('click', handleSubtract);
myMulButton.addEventListener('click', handleMultiply);
myDivButton.addEventListener('click', handleDivide);