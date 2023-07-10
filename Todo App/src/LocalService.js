"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Todo_js_1 = __importDefault(require("./Todo.js"));
class LocalService {
    todoList = [];
    constructor() {
        // this.loadTodoList();
        console.log("local service");
    }
    addTodo(text, completed) {
        const todo = new Todo_js_1.default(text, completed);
        this.todoList.push(todo);
        this.saveTodoList();
        return todo;
    }
    getAllTodos() {
        this.todoList = JSON.parse(localStorage.getItem("todo-list") ?? "[]");
        if (this.todoList == null) {
            return [];
        }
        else {
            this.todoList = this.todoList.map(element => new Todo_js_1.default(element["text"], element["completed"]));
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
        this.todoList = this.todoList.filter(elem => elem.id != id);
        this.saveTodoList();
    }
    saveTodoList() {
        localStorage.setItem("todo-list", JSON.stringify(this.todoList));
    }
    loadTodoList() {
        this.todoList = JSON.parse(localStorage.getItem("todo-list") ?? "[]");
        // todo.lastID = this.todoList.at(-1)?.id ?? 0;
        return this.todoList;
    }
}
exports.default = LocalService;
