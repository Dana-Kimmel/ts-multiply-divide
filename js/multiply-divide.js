"use strict";
function multiply() {
    var val1 = document.getElementById("firstNum").value;
    var val2 = document.getElementById("secondNum").value;
    var result = parseFloat(val1) * parseFloat(val2);
    updateDisplay(result);
}
function divide() {
    var val1 = document.getElementById("firstNum").value;
    var val2 = document.getElementById("secondNum").value;
    var result = parseFloat(val1) / parseFloat(val2);
    updateDisplay(result);
}
function updateDisplay(number) {
    var input = document.getElementById("numInput");
    input.value = number.toString();
}
