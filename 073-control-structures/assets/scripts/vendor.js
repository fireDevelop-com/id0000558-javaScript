const usrInput = document.getElementById('input-number');
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');

const currentCalculationOutput = document.getElementById('calculation');
const currentResultOutput = document.getElementById('result');

function outputResult(calculation, result) {
  currentResultOutput.textContent = calculation;
  currentCalculationOutput.textContent = result;
}
