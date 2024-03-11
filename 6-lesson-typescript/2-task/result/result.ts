function reverseArray<T>(array: Array<T>): Array<T> {
    return array.reverse()
}

let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = reverseArray<Number>(numbers);
console.log(reversedNumbers); // Вывод: [5, 4, 3, 2, 1]

let words = ["TypeScript", "is", "awesome"];

let reversedWords = reverseArray<String>(words);
console.log(reversedWords); // Вывод: ["awesome", "is", "TypeScript"]
