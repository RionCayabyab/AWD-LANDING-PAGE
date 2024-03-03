const display = document.getElementById("display");

function appendNumber(number) {
  display.value += number;
}

function appendOperation(operator) {
  display.value += operator;
}

function appendDecimal() {
  if (!display.value.includes(".")) {
    display.value += ".";
  }
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}

function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
}
