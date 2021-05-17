const display = document.getElementById('display')
const clearButton = document.getElementById('clear')
const deleteButton = document.getElementById('delete')
const decimalButton = document.getElementById('decimal')
const equalsButton = document.getElementById('equals')
const operatorButtons = document.querySelectorAll('operator-buttons')
const numberButtons = document.getElementById('number-buttons')

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

// dont work
function operate(operator, x, y) {
    if (operator == multiply) {
        multiply()
        console.log('work')
    } else {
        console.log('wrong')
    }
}

clearButton.addEventListener('click', clearDisplay)
function clearDisplay() {
    while (display.firstChild) {
        display.removeChild(display.firstChild)
    }
}

deleteButton.addEventListener('click', deleteLastInput)
function deleteLastInput() {
    if (display.childElementCount == 0) {
        return;
    }
    display.lastElementChild.remove();
}

console.log(display)

console.log(operate(multiply, 6,6))