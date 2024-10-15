let currentInput = "";
let operator = "";
let previousInput = "";

function appendNumber(number) {
  currentInput += number;
  updateDisplay(currentInput);
}

function operate(op) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = "";
}

function calculate() {
  if (previousInput === "" || currentInput === "") return;
  let result;
  if (operator === "+") {
    result = parseFloat(previousInput) + parseFloat(currentInput);
  } else if (operator === "-") {
    result = parseFloat(previousInput) - parseFloat(currentInput);
  }
  currentInput = result.toString();
  operator = "";
  previousInput = "";
  updateDisplay(currentInput);
}

function clearDisplay() {
  currentInput = "";
  operator = "";
  previousInput = "";
  updateDisplay(currentInput);
}

function updateDisplay(value) {
  document.getElementById("display").value = value;
}
