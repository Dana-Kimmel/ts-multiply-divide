function multiply() {
  let val1 = (document.getElementById("firstNum") as HTMLInputElement).value;
  let val2 = (document.getElementById("secondNum") as HTMLInputElement).value;
  let result = parseFloat(val1) * parseFloat(val2);
  updateDisplay(result);
}

function divide() {
  let val1 = (document.getElementById("firstNum") as HTMLInputElement).value;
  let val2 = (document.getElementById("secondNum") as HTMLInputElement).value;
  let result = parseFloat(val1) / parseFloat(val2);
  updateDisplay(result);
}

function updateDisplay(number: number) {
  let input = document.getElementById("numInput") as HTMLInputElement;
  input.value = number.toString();
}
