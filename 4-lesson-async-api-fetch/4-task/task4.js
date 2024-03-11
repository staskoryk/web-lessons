async function postData(url, data) {
    // Ваш код
}

postData('https://jsonplaceholder.typicode.com/posts', { title: 'foo', body: 'bar', userId: 1 }).then(console.log) // => 'Пост создан'
