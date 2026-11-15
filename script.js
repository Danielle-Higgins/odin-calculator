function add(num1, num2) {
  const sum = parseFloat(num1) + parseFloat(num2);

  // check if sum is a valid number or float
  if (!Number.isFinite(sum)) return;
  return sum;
}
