function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => displayTodos(data))
}

function displayTodos(todos) {
    // console.log(todos);
    const todoContainer = document.getElementById('todo-container');
    for (const todo of todos) {
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
            <h3>title: ${todo.title}</h3>
            <p>completed: ${todo.completed}</p>
        `
        todoContainer.appendChild(todoDiv);
    }
}
loadTodos();