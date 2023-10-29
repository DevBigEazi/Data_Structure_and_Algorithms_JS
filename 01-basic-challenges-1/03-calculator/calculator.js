function calculator(num1, num2, operator) {
    let results;

    switch (operator) {
        case "+":
            results = num1 + num2;
            break;
        case "-":
            results = num1 - num2;
            break;
        case "*":
            results = num1 * num2;
            break;
        case "/":
            results = num1 / num2;
            break;
        default:

    }

    return results;
}

module.exports = calculator;
