async function fetchData(url) {
    try {
        const response = await fetch(url)
        return response.json()
    } catch (e) {
        console.error(e.message)
    }
}

fetchData('https://jsonplaceholder.typicode.com/posts').then(console.log) // => [{post1}, {post2}, ... {postN}]
