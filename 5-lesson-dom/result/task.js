function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value
    let result

    switch (operator) {
        case 'add':
            result = num1 + num2
            break;
        case 'subtract':
            result = num1 - num2
            break;
        case 'multiply':
            result = num1 * num2
            break;
        case 'divide':
            if (num2 === 0) return alert('На ноль не делим')
            result = num1 / num2
            break;
        default:
            return alert('Какая-то ошибка')
    }

    document.getElementById('result').innerText = result
}
