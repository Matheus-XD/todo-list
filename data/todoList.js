export let todoList = []

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