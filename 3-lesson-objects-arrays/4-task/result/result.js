const arr = [ 3, 4, 6, 9, 10, 12, 14, 15, 17, 19, 21 ];

function task(arr, x) {
    if (!Array.isArray(arr) || typeof x !== 'number' || arr.length === 0 || arr[0] > x) return -1
    if (arr[arr.length - 1] < x) return arr[arr.length -1]
    for (let i = 0; i <= arr.length; i++) {
        if (x === arr[i]) return arr[i]
        if (x > arr[i] && x < arr[i + 1]) return arr[i]
    }
}

console.log(task(arr, 12))           // Найдено заданное число 12
console.log(task(arr, 13))           // Найдено меньшее число 12
console.log(task(arr, 2) )           // Число слишком мало и выходит за границы массива -1
console.log(task(arr, 22))           // Число слишком велико и выходит за границы массива 21
console.log(task(arr, 3))            // Левая граница массива 3
console.log(task(arr, 21))           // Правая граница массива 21
console.log(task([], undefined)) // Массив пуст -1
console.log(task(null, null))    // Неверные аргументы -1
