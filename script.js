import { todoList, deleteFromList} from "./data/todoList.js";

let idNumber = 1
document.querySelector('.js-add-button')
.addEventListener('click', ()=>{
    const todoItem = document.querySelector('.js-todo-input').value;
    const dateItem = document.querySelector('.js-date-input').value;
    if (!todoItem) {
        alert('please insert a value')
    } else {
        todoList.push(
            {   
                id: idNumber,
                todo: todoItem,
                date: dateItem
            }
        )
        console.log(todoList);
        
        document.querySelector('.js-todo-input') 
        .value = null
        document.querySelector('.js-date-input')
        .value = null
        idNumber += 1
        renderHTML()
    }
    
})
function renderHTML() {
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
            const todoToDeleteId = deleteButton.dataset.todoToDeleteId; 
            deleteFromList(todoToDeleteId)
        })
    })
}



