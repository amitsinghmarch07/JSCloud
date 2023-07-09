import Todo from "../Todo.js";

export default class localservice {
    
    todoList = [];
    constructor() {
        this.loadTodoList();
    }
    addTodo(text, completed) {
        const todo = new Todo(text.completed);
        this.todoList.push(todo);
        this.saveTodoList();
        return todo;
    }
    getAllTodo() {
        return this.todoList;
    }
    getTodo(id) {
        return this.todoList.find(elem => elem.id == id);
    }
    updateTodo(id) {
        const found = this.todoList.find(elem => elem.id = id);
        if (found)
            found.completed=
    }
}