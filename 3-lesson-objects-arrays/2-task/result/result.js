const person = {
    stas: 'name',
    22: 'age',
    Minsk: 'city'
}

function swapKeysAndValues(obj) {
    const swappedObj = {}

    for (const objKey in obj) {
        if (+objKey) {
            swappedObj[obj[objKey]] = +objKey
        } else {
            swappedObj[obj[objKey]] = objKey
        }
    }

    return swappedObj
}

console.log(swapKeysAndValues(person)); // {name: 'stas', age: 20, city: 'Minsk'}
