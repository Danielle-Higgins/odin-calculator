const display = document.querySelector(".display")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equals = document.querySelector(".equals")

function add(num1, num2) {
    let add = parseFloat(num1) + parseFloat(num2)
    return add
}

function subtract(num1, num2) {
    let sub = parseFloat(num1) - parseFloat(num2)
    return sub
}

function multiply(num1, num2) {
    let mult = parseFloat(num1) * parseFloat(num2)
    return mult
}

function divide(num1, num2) {
    let divide = parseFloat(num1) / parseFloat(num2)
    return divide
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2)
        case "-":
            return subtract(num1, num2)
        case "*":
            return multiply(num1, num2)
        case "/":
            return divide(num1, num2)
    }
}

let firstNum
let secondNum
let sign

// create the functions that populate the display when the number buttons are clicked
// for each number button
numbers.forEach(number => {

    // when clicked
    number.addEventListener("click", (e) => {
        
        // show the numbers in the display
        display.textContent = display.textContent + e.target.textContent
    })
})

operators.forEach(operator => {

    operator.addEventListener("click", (e) => {

        // You’ll need to store the first number that is input into the calculator when a user presses an operator
        firstNum = display.textContent
        sign = e.target.textContent 

        display.textContent = ""
    })
})

equals.addEventListener("click", (e) => {
    secondNum = display.textContent
    console.log(secondNum)

    display.textContent = operate(sign, firstNum, secondNum)
})