let student = {
    name: 'Стас',
    age: 22,
    grade: 'Техник-программист',
    introduce: function () {
        console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет, я учусь на ${this.grade}.`)
    }
}

student.introduce() // => Привет, меня зовут [name], мне [age] лет, я учусь на [grade].
