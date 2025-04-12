function addition(a, b) {
    return a + b;
}
function subtraction(a, b) {
    return a - b;
}
function multiplication(a, b) {
    return a * b;
}
function division(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}


let calculationHistory = [];

function calculator(a, b, operator) {
    let result;
    switch (operator) {
        case "+":
            result = addition(a, b);
            break;
        case "-":
            result = subtraction(a, b);
            break;
        case "*":
            result = multiplication(a, b);
            break;
        case "/":
            result = division(a, b);
            break;
        default:
            result = "Error: Invalid operator";
    }

    // Store the calculation as an object
    calculationHistory.push({
        operand1: a,
        operand2: b,
        operator: operator,
        result: result
    });

    return result;
}

