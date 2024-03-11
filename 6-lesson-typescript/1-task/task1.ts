interface Car {
    // ваш код
}

let car: Car = {
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

// car.showInformation()
// console.log(2024 - car.getYear())
// console.log('Модель: ' + car.getModel())
