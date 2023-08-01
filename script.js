const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const previous = document.querySelector(".prev")
const current = document.querySelector(".current")
const equals = document.querySelector(".equals")
const allClear = document.querySelector(".all-clear")

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
    let answer = parseFloat(num1) / parseFloat(num2)
    
    // Display a snarky error message if the user tries to divide by 0
    if (answer === Infinity) {
        alert("Really? You tried to divide by zero? 😂 Try again!")
        return "undefined"
    }

    // You should round answers with long decimals so that they don’t overflow the screen.
    if (answer % 1 !== 0) {
        answer = answer.toFixed(3)
    }

    return answer
}

// 2. Create three variables for each of the parts of a calculator operation. You’ll use these variables to update your display later.
let prevOperand = ""
let currentOperand = ""
let sign = ""
let result = 0

// 3. Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

function operate(operator, num1, num2) {
    let result = 0

    // Pressing = before entering all of the numbers or an operator could cause problems!
    if (num1 === "" || num2 === "") return

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
    // set currentOperand to be the result so we can operate on the result and not the initial currentOperand
    currentOperand = result
    
    // set prevOperand to be empty so after equals sign we can evaluate the correct results
    prevOperand = ""

    return result
}

// 5. Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use.

// reset everything
function clear() {
    currentOperand = ""
    prevOperand = ""
    sign = ""
    result = 0
}

// appends the operands to each other
function append(number) {
    currentOperand += number
}

function chooseOperator(operator) {
    // if the user doesn't click on a number, then they cant choose an operator
    if (currentOperand === "") return

    // if the user clicks on another operator before the equals sign, evaluate the current expression 
    if (prevOperand !== "") operate(sign, prevOperand, currentOperand)

    sign = operator
    prevOperand = currentOperand
    currentOperand = ""
}

// update the display
function updateDisplay() {
    if (currentOperand === "") {
        current.textContent = "0"
    } else {
        current.textContent = currentOperand
    }
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

equals.addEventListener("click", () => {
    result = operate(sign, prevOperand, currentOperand)
    current.textContent = result
})

allClear.addEventListener("click", () => {
    clear()
    updateDisplay()
})