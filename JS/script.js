const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");

function calculate() {
    try {
        display.value = Function(
          `"use strict"; return (${display.value})`
        )();
      } catch {
        display.value = "Erro";
      }


      return;
}

function clearDisplay() {
    display.value = "";
}

function backspace(event) {
    event.preventDefault();
    display.value = display.value.slice(0, -1);
}

function square() {
    display.value = Math.pow(Number(display.value), 2);
}

function cube() {
    display.value = Math.pow(Number(display.value), 3);
}

function percent() {
    display.value = Number(display.value) / 100;
}

function squareRoot() {
    display.value = Math.sqrt(Number(display.value));
}

function appendValue(value) {
    display.value += value;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
        clearDisplay();
      return;
    }
    if (value === "%") {
      percent();
      return;
    }

    if (value === "√") {
      squareRoot();
      return;
    }

    if (value === "x²") {
      square();
      return;
    }
    if (value === "x³") {
      cube();
      return;
    }

    if (value === "=") {
        calculate();
        return;
    }
    appendValue(value);
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (key === "Escape") {
    clearDisplay();
}

if (key === "Backspace") {
    backspace(event);
}

if ('0123456789+-*/.'.includes(key)) {
    appendValue(key);
}
if (key === "Enter") {
    calculate();
}
})
