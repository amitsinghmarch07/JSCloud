import Todo from "./Todo.js";

export default class LocalService {

    todoList = [];
    constructor() {
        // this.loadTodoList();
        console.log("local service");
    }
    addTodo(text, completed) {
        const todo = new Todo(text, completed);
        this.todoList.push(todo);
        this.saveTodoList();
        return todo;
    }
    getAllTodos() {
        const dictionary = JSON.parse(localStorage.getItem("todo-list"));
        if (dictionary == null) {
            return [];
        } else {
            this.todoList = dictionary.map(element => new Todo(element["text"], element["completed"]))
            return this.todoList;
        }
    }
    getTodo(id) {
        return this.todoList.find(elem => elem.id == id);
    }
    updateTodo(id) {
        const found = this.todoList.find(elem => elem.id = id);
        if (found)
            found.completed = !found.completed;
        this.saveTodoList();
    }
    deleteTodo(id) {
        this.to = this.todoList.filter(elem => elem.id != id);
        this.saveTodoList();
    }
    saveTodoList() {
        localStorage.setItem("todo-list", JSON.stringify(this.todoList));
    }
    loadTodoList() {
        this.todoList = JSON.parse(localStorage.getItem("todo-list") ?? "[]");
        todo.lastID = this.todoList.at(-1)?.id ?? 0;
        return this.todoList;
    }
}