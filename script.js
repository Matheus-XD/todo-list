import { todoList,renderHTML, deleteFromList, saveToLocalStorage} from "./data/todoList.js";


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
        saveToLocalStorage(todoList)
             
    }
    
})

document.querySelector('.js-todo-input')
.addEventListener('keydown', (event)=>{
    if (event.key === 'Enter') {
        const todoItem = document.querySelector('.js-todo-input').value;
        const dateItem = document.querySelector('.js-date-input').value;
        if (!todoItem) {
            alert('please insert a value')
        } else {
            todoList.push(
                
            )
            console.log(todoList);
            
            document.querySelector('.js-todo-input') 
            .value = null
            document.querySelector('.js-date-input')
            .value = null
            idNumber += 1
            renderHTML()
            saveToLocalStorage(todoList)
                
        }
    }
    
})




