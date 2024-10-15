function calculate(operation) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter valid numbers.";
  } else {
    result = operation === "+" ? num1 + num2 : num1 - num2;
  }

  document.getElementById("result").innerText = `Result: ${result}`;
}
