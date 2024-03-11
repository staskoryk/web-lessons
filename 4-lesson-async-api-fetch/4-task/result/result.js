async function postData(url, data) {
    try {
        const response = await fetch(url, {method: 'POST', body: JSON.stringify(data)})
        if (response.status === 201) {
            return 'Пост создан'
        }
    } catch (e) {
        console.error(e)
    }
}

postData('https://jsonplaceholder.typicode.com/posts', {title: 'foo', body: 'bar', userId: 1}).then(console.log) // => 'Пост создан'
