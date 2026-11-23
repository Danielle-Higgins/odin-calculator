const display = document.getElementById("display");
const buttonContainer = document.querySelector(".buttons");
const allClear = document.querySelector(".ac");

let firstNum = "";
let operator = "";
let secondNum = "";
let answer = "";

function add(num1, num2) {
  const sum = parseFloat(num1) + parseFloat(num2);

  // check if sum is a valid number or float
  if (!Number.isFinite(sum)) return;
  return sum;
}

function subtract(num1, num2) {
  const difference = parseFloat(num1) - parseFloat(num2);

  if (!Number.isFinite(difference)) return;
  return difference;
}

function divide(num1, num2) {
  const quotient = parseFloat(num1) / parseFloat(num2);

  if (!Number.isFinite(quotient)) return;
  return quotient;
}

function multiply(num1, num2) {
  const product = parseFloat(num1) * parseFloat(num2);

  if (!Number.isFinite(product)) return;
  return product;
}

function operate(op, num1, num2) {
  let result = 0;
  switch (op) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "x":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
  }
  return result;
}

function updateDisplay() {
  display.value = firstNum + "" + operator + "" + secondNum;
}

function clear() {
  firstNum = "";
  secondNum = "";
  operator = "";
  answer = "";
  display.value = "0";
}

buttonContainer.addEventListener("click", (e) => {
  // ignore non button clicks
  if (!e.target.matches("button")) return;

  const btn = e.target;

  // handle number clicks
  if (btn.classList.contains("number")) {
    if (operator === "") {
      firstNum += btn.textContent;
      updateDisplay();
    } else {
      secondNum += btn.textContent;
      updateDisplay();
    }
  }

  // handle operator clicks
  if (btn.classList.contains("operator")) {
    if (firstNum === "") return;
    if (operator !== "") {
      if (answer === "") {
        answer = operate(operator, firstNum, secondNum);
      }

      firstNum = answer;
      secondNum = "";
      answer = "";
    }
    operator = btn.textContent;
    updateDisplay();
  }

  // handle equal sign click
  if (btn.classList.contains("equal")) {
    if (secondNum === "") return;
    answer = operate(operator, firstNum, secondNum);
    display.value = answer;
  }
});

allClear.addEventListener("click", clear);
