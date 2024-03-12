Задание: Создайте простой калькулятор, который может выполнять операции сложения, вычитания, умножения и деления. Пользователь вводит два числа, выбирает операцию, а затем нажимает кнопку “Рассчитать” для получения результата. Результат отображается на странице. Если пользователь пытается поделить на ноль, выводится сообщение об ошибке.
Напишите логику функции `calculate()` в файле `task.js`

HTML:
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="styles.css">
    <title>Калькулятор</title>
</head>
<body>
    <input id="num1" type="number" placeholder="Введите число">
    <select id="operator">
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
    </select>
    <input id="num2" type="number" placeholder="Введите число">
    <button onclick="calculate()">Рассчитать</button>
    <p id="result"></p>
</body>
</html>
```

CSS:
```css
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
}

input, select, button {
    margin: 10px;
    padding: 10px;
    font-size: 18px;
}

button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    transition-duration: 0.4s;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

#result {
    font-size: 24px;
    font-weight: bold;
    color: #333;
}
```
