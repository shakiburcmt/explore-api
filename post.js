function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPosts(data))
}

/*
1. get the container element where you want to add the new element
2. create child element
3. Set innerText or InnerHTML
4. appendChild

*/



function displayPosts(data) {
    // console.log(data)
    const postsContainer = document.getElementById('posts-container');
    for (const posts of data) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('posts')
        postDiv.innerHTML = `
            <h4>User-${posts.userId}</h4>
            <h5>Post: ${posts.title}</h5>
            <p>Post Description: ${posts.body}</p>
        `;
        postsContainer.appendChild(postDiv);
    }
}
loadPost();