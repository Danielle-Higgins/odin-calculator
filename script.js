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
