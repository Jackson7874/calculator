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

function operate(operator, x, y) {
    if (operator == multiply) {
        multiply()
        console.log('work')
    } else {
        console.log('wrong')
    }
}

console.log(operate(multiply, 6,6))