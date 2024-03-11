function reverseArray(array) {
    return array.reverse();
}
var numbers = [1, 2, 3, 4, 5];
var reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers); // Вывод: [5, 4, 3, 2, 1]
var words = ["TypeScript", "is", "awesome"];
var reversedWords = reverseArray(words);
console.log(reversedWords); // Вывод: ["awesome", "is", "TypeScript"]
