const myInput1 = document.getElementById("sum-input-1");
const myInput2 = document.getElementById("sum-input-2");
const mySumButton = document.getElementById("sum-button");
const mySubButton = document.getElementById("sub-button");
const myMulButton = document.getElementById("mul-button");
const myDivButton = document.getElementById("div-button");
const mySpan = document.getElementById("sum-span");

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
    mySpan.textContent = sumValue;
})

mySubButton.addEventListener('click', () => {
    const value1 = myInput1.valueAsNumber;
    const value2 = myInput2.valueAsNumber;
     const subValue = value1 - value2;
    mySpan.textContent = subValue;
})

myMulButton.addEventListener('click', () => {
    const value1 = myInput1.valueAsNumber;
    const value2 = myInput2.valueAsNumber;
    const mulValue = value1 * value2;
    mySpan.textContent = mulValue;
})

myDivButton.addEventListener('click', () => {
    const value1 = myInput1.valueAsNumber;
    const value2 = myInput2.valueAsNumber;
    const divValue = value1 / value2;
    mySpan.textContent = divValue;
})