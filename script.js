const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const previous = document.querySelector(".prev")
const current = document.querySelector(".current")
const equals = document.querySelector(".equals")

// 1. Create functions for all of the basic math operators you typically find on simple calculators

function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2)
}

function subtract(num1, num2) {
    return parseFloat(num1) - parseFloat(num2)
}

function multiply(num1, num2) {
    return parseFloat(num1) * parseFloat(num2)
}

function divide(num1, num2) {
    return parseFloat(num1) / parseFloat(num2)
}

// 3. Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

function operate(operator, num1, num2) {
    let result = 0
    switch(operator) {
        case "+":
            result = add(num1, num2)
            break
        case "-":
            result = subtract(num1, num2)
            break
        case "*":
            result = multiply(num1, num2)
            break
        case "/":
            result = divide(num1, num2)
            break
    }
    return result
}

// 2. Create three variables for each of the parts of a calculator operation. You’ll use these variables to update your display later.
let prevOperand = ""
let currentOperand = ""
let sign = ""
let result = 0

// 5. Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use.

// appends the operands to each other
function append(number) {
    currentOperand += number
    //console.log(currentOperand)
}

// chooses the operator the user wants to use
function chooseOperator(operator) {
    sign = operator
    //console.log(sign)
    prevOperand = currentOperand
    //console.log(prevOperand)
    currentOperand = ""
}

// update the display
function updateDisplay() {
    current.textContent = currentOperand
    previous.textContent = prevOperand + " " + sign + " " + currentOperand
}

numbers.forEach(number => {

    number.addEventListener("click", (e) => {
        append(e.target.textContent)
        updateDisplay()
    })
})

// 6. Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.

operators.forEach(operator => {

    operator.addEventListener("click", (e) => {
        chooseOperator(e.target.textContent)
        updateDisplay()
    })
})

equals.addEventListener("click", (e) => {
    result = operate(sign, prevOperand, currentOperand)
    //console.log(result)
    current.textContent = result
})