const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (value === "C") {
      currentInput = "";
      display.value = "";
    } else if (value === "←") {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    } else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

// Keyboard Support
document.addEventListener("keydown", (e) => {
  const key = e.key;
  if ((/[0-9+\-*/.]/).test(key)) {
    currentInput += key;
    display.value = currentInput;
  } else if (key === "Enter") {
    try {
      currentInput = eval(currentInput).toString();
      display.value = currentInput;
    } catch {
      display.value = "Error";
      currentInput = "";
    }
  } else if (key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  } else if (key.toLowerCase() === "c") {
    currentInput = "";
    display.value = "";
  }
});
