const display = document.getElementById('display')
const clearButton = document.getElementById('clear') // has listener
const deleteButton = document.getElementById('delete') // has listener
const decimalButton = document.getElementById('decimal') // has listener
const equalsButton = document.getElementById('equals')
const operatorButtons = document.querySelectorAll('operator-buttons')
const numberButtons = document.querySelectorAll('number-buttons')

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

decimalButton.addEventListener('click', createDecimal);
function createDecimal() {
    display.textContent += decimalButton.textContent;
    decimalButton.removeEventListener('click', createDecimal);
};

clearButton.addEventListener('click', clearDisplay);
function clearDisplay() {
    while (display.firstChild) {
        display.removeChild(display.firstChild)
    }
}

deleteButton.addEventListener('click', deleteLastInput);
function deleteLastInput() {
    if (display.childElementCount == 0) {
        return;
    }
    display.lastElementChild.remove();
}