const display = document.querySelector(".display")
const numbers = document.querySelectorAll(".number")

function add(num1, num2) {
    let add = parseFloat(num1) + parseFloat(num2)
    console.log(add)
}

add(5.5, 5.4)

function subtract(num1, num2) {
    let sub = parseFloat(num1) - parseFloat(num2)
    console.log(sub)
}

subtract(10.5, 6.1)

function multiply(num1, num2) {
    let mult = parseFloat(num1) * parseFloat(num2)
    console.log(mult)
}

multiply(2.2, 2.2)

function divide(num1, num2) {
    let divide = parseFloat(num1) / parseFloat(num2)
    console.log(divide)
}

divide(6, 2)