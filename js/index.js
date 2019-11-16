(async () => {
    const container = document.querySelector('#container')
    const users = await getData('https://jsonplaceholder.typicode.com/users')
    const posts = await getData('https://jsonplaceholder.typicode.com/posts')


    async function getData(url) {
        try {
            const res = await fetch(url)
            const data = await res.json()
            return data
        } catch (error) {
            console.log(error)
        }
    }

    function cardTemplate({ }) {
        return `
            <div class="card ${gender}">
                <div class="card-header">
                    <div class="avatar">
                        <img src="${avatar}" alt="${name}">
                    </div>
                    <h3 class="name">${name}</h3>
                </div>
                <div class="card-content">
                    <h4 class="title">${post.title}</h4>
                    <p class="body">${post.body}</p>
                </div>
            </div>
        `
    }

})()
