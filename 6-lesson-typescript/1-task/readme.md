Задача: Опишите свойства объекта "car" с TypeScript:

1. У вас имеется объект `car` со следущими свойствами:
```js
let car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    owner: 'Human', // 'Human' || 'Salon'
    needRepair: false,
    oneOwner: true,
    getYear: function () {
        return this.year
    },
    getModel: function () {
        return this.model
    },
    showInformation: function() {
        console.log(`Машина бренда ${this.brand}, модели ${this.model}, года выпуска ${this.year}`);
    }
};
```
2. Используя interface и type опишите типы данного объекта

Примечание: поле `owner` может быть только значениями 'Human' и 'Salon'
. Поле `oneOwner` сделайте необязательным
