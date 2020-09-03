const myInput1 = document.getElementById("sum-input-1");
const myInput2 = document.getElementById("sum-input-2");
const myInput3 = document.getElementById("sum-input-3");
const myInput4 = document.getElementById("sum-input-4");
const myInput5 = document.getElementById("sum-input-5");
const myInput6 = document.getElementById("sum-input-6");
const myInput7 = document.getElementById("sum-input-7");
const myInput8 = document.getElementById("sum-input-8");
const mySumButton = document.getElementById("sum-button");
const mySubButton = document.getElementById("sub-button");
const myMulButton = document.getElementById("mul-button");
const myDivButton = document.getElementById("div-button");
const mySumSpan = document.getElementById("sum-span");
const mySubSpan = document.getElementById("sub-span");
const myMulSpan = document.getElementById("mul-span");
const myDivSpan = document.getElementById("div-span");

// console.log(myInput1)
// console.log(myInput2)
// console.log(myButton)
// console.log(mySpan)

mySumButton.addEventListener('click', () => {
    // console.log(Date());
    const value1 = myInput1.valueAsNumber;
    const value2 = myInput2.valueAsNumber;
    // console.log(value1);
    // console.log(value2);
    // const sumValue = parseFloat(value1) + parseFloat(value2);
    const sumValue = value1 + value2;
    // console.log(sumValue);
    mySumSpan.textContent = sumValue;
})

mySubButton.addEventListener('click', () => {
    const value3 = myInput3.valueAsNumber;
    const value4 = myInput4.valueAsNumber;
     const subValue = value3 - value4;
    mySubSpan.textContent = subValue;
})

myMulButton.addEventListener('click', () => {
    const value5 = myInput5.valueAsNumber;
    const value6 = myInput6.valueAsNumber;
    const mulValue = value5 * value6;
    myMulSpan.textContent = mulValue;
})

myDivButton.addEventListener('click', () => {
    const value7 = myInput7.valueAsNumber;
    const value8 = myInput8.valueAsNumber;
    const divValue = value7 / value8;
    myDivSpan.textContent = divValue;
})