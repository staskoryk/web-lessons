var car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    owner: 'Human', // 'Human' || 'Salon'
    needRepair: false,
    oneOwner: true,
    getYear: function () {
        return this.year;
    },
    getModel: function () {
        return this.model;
    },
    showInformation: function () {
        console.log("\u041C\u0430\u0448\u0438\u043D\u0430 \u0431\u0440\u0435\u043D\u0434\u0430 ".concat(this.brand, ", \u043C\u043E\u0434\u0435\u043B\u0438 ").concat(this.model, ", \u0433\u043E\u0434\u0430 \u0432\u044B\u043F\u0443\u0441\u043A\u0430 ").concat(this.year));
    }
};
car.showInformation();
console.log("\u041B\u0435\u0442 \u0442\u0430\u0447\u043A\u0435: ".concat(2024 - car.getYear()));
console.log('Модель: ' + car.getModel());
