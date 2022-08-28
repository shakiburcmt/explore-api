function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUsers2(data))
}

function displayUsers2(data) {
    // console.log(data)
    // for (const user of data) {
    //     console.log(user.email);
    // }
    const ul = document.getElementById('users-list');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.email;
        ul.appendChild(li);
    }
}