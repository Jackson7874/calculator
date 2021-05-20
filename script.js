const display = document.getElementById('display')
const clearButton = document.getElementById('clear') // has listener
const deleteButton = document.getElementById('delete') // has listener
const decimalButton = document.getElementById('decimal') // has listener
const equalsButton = document.getElementById('equals')
const operatorButtons = document.querySelectorAll('[data-operator-buttons]')
const numberButtons = document.querySelectorAll('[data-number-buttons]')

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

clearButton.addEventListener('click', clearDisplay);
function clearDisplay() {
    display.textContent = ""
    decimalButton.addEventListener('click', createDecimal);
}

deleteButton.addEventListener('click', deleteLastInput);
function deleteLastInput() {
    let displayValue = display.textContent;
    display.textContent = displayValue.replace(displayValue.charAt(displayValue.length - 1), '');
    if (displayValue.search('.')) {
        decimalButton.removeEventListener('click', createDecimal);
    }
}

decimalButton.addEventListener('click', createDecimal);
function createDecimal() {
    display.textContent += "."
    decimalButton.removeEventListener('click', createDecimal);
};

numberButtons.forEach((button) =>
    button.addEventListener('click', () => updateDisplayValue(button.textContent))
);
function updateDisplayValue(buttonNumber) {
    display.textContent += buttonNumber;
}

operatorButtons.forEach((button) =>
    button.addEventListener('click', () => updateDisplayOperator(button.textContent))
);
function updateDisplayOperator(buttonValue) {
    if (buttonValue == '÷') {
        buttonValue = '/'
    }
    display.textContent += buttonValue;
}