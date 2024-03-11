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
    return Promise.all([promise1, promise2])
}

task2(promise1, promise2).then(console.log)
