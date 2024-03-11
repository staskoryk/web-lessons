let numbers = [1,2,3,4,5,6,7,8];

function sortNumbersByParity(arr) {
    const evenNumbers = arr.filter(item => item % 2 === 0)
    const oddNumbers = arr.filter(item => item % 2 !== 0)
    const sortedNumbers = evenNumbers.concat(oddNumbers)
    sortedNumbers.push({startNumbers: arr.join(', ')})
    return sortedNumbers
}

console.log(sortNumbersByParity(numbers)); // => [2,4,6,8,1,3,5,7,{startNumbers: '1, 2, 3, 4, 5, 6, 7, 8'}]
