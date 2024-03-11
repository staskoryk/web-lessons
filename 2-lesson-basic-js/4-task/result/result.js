function calculate(num1, num2, action) {
    if (action === '+') {
        return num1 + num2
    } else if (action === '-') {
        return num1 - num2
    } else if (action === '*') {
        return num1 * num2
    } else if (action === '/') {
        return num1 / num2
    } else {
        return 'Укажите оператор'
    }
}

function calculateUsingSwitch (num1, num2, action) {
    switch (action) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            return 'Укажите оператор'
    }
}

console.log(calculateUsingSwitch(2, 2, '+'))
console.log(calculateUsingSwitch(2, 2, '-'))
console.log(calculateUsingSwitch(2, 2, '*'))
console.log(calculateUsingSwitch(2, 2, '/'))
console.log(calculateUsingSwitch(2, 2))
