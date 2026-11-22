const display = document.getElementById("display");
const buttonContainer = document.querySelector(".buttons");

let firstNum = "";
let operator = "";
let secondNum = "";

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
  let value = 0;
  switch (op) {
    case "+":
      value = add(num1, num2);
      break;
    case "-":
      value = subtract(num1, num2);
      break;
    case "*":
      value = multiply(num1, num2);
      break;
    case "/":
      value = divide(num1, num2);
      break;
  }
  return value;
}

buttonContainer.addEventListener("click", (e) => {
  // ignore non button clicks
  if (!e.target.matches("button")) return;

  const btn = e.target;

  // handle number clicks
  if (btn.classList.contains("number")) {
    if (operator === "") {
      firstNum += btn.textContent;
      display.value = firstNum;
    } else {
      secondNum += btn.textContent;
      display.value = secondNum;
    }
  }

  // handle operator clicks
  if (btn.classList.contains("operator")) {
    if (firstNum === "") return;
    operator = btn.textContent;
  }
});
