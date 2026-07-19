export let todoList = JSON.parse(localStorage.getItem('todoList')) || []

export function renderHTML() {
    let todoListHTML = ''
    todoList.forEach((item)=>{
        const todo = `
            <div class="todo-container js-todo-container-${item.id}" data-todo-id = "${item.id}">
                <p class="todo">${item.todo}</p>
                <p class="date">${item.date}</p>
                <button class="js-remove-button" data-todo-to-delete-id = "${item.id}">
                    remove
                </button>
            </div>
        `
        todoListHTML += todo
    })
    
    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML

    document.querySelectorAll('.js-remove-button')
    .forEach((deleteButton)=>{
        deleteButton.addEventListener('click', ()=>{
            const todoToDeleteId = Number(deleteButton.dataset.todoToDeleteId); 
            deleteFromList(todoToDeleteId)
            deleteFromHtml(todoToDeleteId)
            saveToLocalStorage(todoList)
        })
    })
}

export function deleteFromList(todoToDeleteID) {
    let newTodoList = []
    todoList.forEach((todo)=>{
        if (todo.id !== todoToDeleteID) {
            newTodoList.push(todo)
        }
    })
    todoList = newTodoList;
    console.log(todoList);   
}

export function deleteFromHtml(todoToDeleteID) {
    document.querySelector(`.js-todo-container-${todoToDeleteID}`)
    .remove()
}

export function saveToLocalStorage(itemToSave) {
    localStorage.setItem('todoList', JSON.stringify(itemToSave))
}