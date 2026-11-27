const display = document.getElementById("display");
const buttonContainer = document.querySelector(".buttons");
const allClear = document.querySelector(".ac");
const decimalBtn = document.querySelector(".decimal");

let firstNum = "";
let operator = "";
let secondNum = "";
let answer = "";
decimalBtn.disabled = false;

function add(num1, num2) {
  const sum = parseFloat(num1) + parseFloat(num2);

  // check if sum is a valid number or float
  if (!Number.isFinite(sum)) return;

  return Math.round(sum * 100) / 100; // round 2 decimal places
}

function subtract(num1, num2) {
  const difference = parseFloat(num1) - parseFloat(num2);

  if (!Number.isFinite(difference)) return;

  return Math.round(difference * 100) / 100;
}

function divide(num1, num2) {
  if (parseFloat(num2) === 0) {
    alert("You Crazy?");
    return 0;
  }

  const quotient = parseFloat(num1) / parseFloat(num2);

  if (!Number.isFinite(quotient)) return;

  return Math.round(quotient * 100) / 100;
}

function multiply(num1, num2) {
  const product = parseFloat(num1) * parseFloat(num2);

  if (!Number.isFinite(product)) return;

  return Math.round(product * 100) / 100;
}

function divideBy100(num1) {
  return parseFloat(num1) / 100;
}

function negate(num) {
  num = parseFloat(num);

  if (num > 0) return -num;
  return num;
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
    case "%":
      result = divideBy100(num1);
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
  decimalBtn.disabled = false;
}

buttonContainer.addEventListener("click", (e) => {
  // ignore non button clicks
  if (!e.target.matches("button")) return;

  const btn = e.target;

  // handle number clicks
  if (btn.classList.contains("number")) {
    // if a number was clicked immediately after a calculation
    if (answer) clear();

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

    // gave conditional a label
    checkOp: if (operator !== "") {
      // use last operator that was pressed
      if (secondNum === "") {
        break checkOp;
      }

      if (answer === "") {
        answer = operate(operator, firstNum, secondNum);
      }

      firstNum = answer;
      secondNum = "";
      answer = "";
    }

    operator = btn.textContent;
    decimalBtn.disabled = false;
    updateDisplay();
  }

  // handle percent sign click
  if (btn.classList.contains("hundred")) {
    if (firstNum === "") return;

    answer = operate("%", firstNum, secondNum);
    display.value = answer;

    firstNum = answer;
    answer = "";
  }

  // handle the negate sign click
  if (btn.classList.contains("negate")) {
    if (operator === "") {
      if (firstNum === "") return;

      firstNum = negate(firstNum);
      updateDisplay();
    } else {
      if (secondNum === "") return;

      secondNum = negate(secondNum);
      updateDisplay();
    }

    if (answer) {
      answer = negate(answer);
      display.value = answer;
    }
  }

  // handle equal sign click
  if (btn.classList.contains("equal")) {
    if (secondNum === "") return;

    answer = operate(operator, firstNum, secondNum);
    display.value = answer;
  }
});

allClear.addEventListener("click", clear);

decimalBtn.addEventListener("click", (e) => {
  if (operator === "") {
    firstNum += e.target.textContent;
    updateDisplay();
    decimalBtn.disabled = true;
  } else {
    secondNum += e.target.textContent;
    updateDisplay();
    decimalBtn.disabled = true;
  }
});
