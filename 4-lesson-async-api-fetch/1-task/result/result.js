function task1(ms) {
    return new Promise(resolve => setTimeout(() => resolve('Hello, world!'), ms))
}

task1(1000).then(data => console.log(data))
