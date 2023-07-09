import Todo from "./Todo.js";

export default class localService {

    todoList = [];

    constructor() {
        this.loadtodoList();

    }
    addTodo(text, completed) {
        const todo = new Todo(text, completed);
        this.todoList.push(todo);
        this.saveTodoList();
        return todo;
    }
    getAllTodo() {
        return this.todoList;
    }
    getTodo(id) {
        return this.todoList.find(elem => elem.id = id);
    }
}


updateTodo(id) {
    const found = this.todoList.find(elem => elem.id = id);
    if (found)

        found.completed = !found.completed;
    this.saveTodoList();
}

deleteTodo(id) {
    this.todoList = this.todoList.filter(elem => elem.id = id);
    this.saveTodoList();
}

saveTodoList() {
    sessionStorage.setItem("todo-list", JSON.stringify(this.todoList));
}

loadtodoList() {
    this.todoList = JSON.parse(sessionStorage.getItem("todo-list") ?? "[]");
    Todo.LastId = this.todoList.at(-1)?.id ?? 0;
}


















