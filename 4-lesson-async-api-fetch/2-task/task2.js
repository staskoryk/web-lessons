const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 4000);
});

function task2(promise1, promise2) {
    // ваш код
}

task2(promise1, promise2) // => ['Promise 1 resolved', 'Promise 2 resolved']
