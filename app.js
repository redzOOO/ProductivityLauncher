// app.js

document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addTodoButton = document.getElementById('add-todo');
    const todoItems = document.getElementById('todo-items');

    // Function to add a new task
    addTodoButton.addEventListener('click', () => {
        const task = todoInput.value.trim();
        if (task) {
            const li = document.createElement('li');
            li.innerHTML = `
                ${task}
                <button class="delete-todo">Delete</button>
            `;
            todoItems.appendChild(li);
            todoInput.value = ''; // Clear input field

            // Add event listener to delete button
            li.querySelector('.delete-todo').addEventListener('click', function() {
                li.remove();
            });
        }
    });

    // Optional: Add task by pressing Enter key
    todoInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addTodoButton.click();
        }
    });
});
