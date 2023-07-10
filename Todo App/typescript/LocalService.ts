import Todo from "./Todo.js";

class LocalService {

    todoList: Todo[] = [];
    constructor() {
        // this.loadTodoList();
        console.log("local service");
    }
    addTodo(text: string, completed: boolean) {
        const todo = new Todo(text, completed);
        this.todoList.push(todo);
        this.saveTodoList();
        return todo;
    }
    getAllTodos() {
        this.todoList = JSON.parse(localStorage.getItem("todo-list") ?? "[]");
        if (this.todoList == null) {
            return [];
        } else {
            this.todoList = this.todoList.map(element => new Todo(element["text"], element["completed"]))
            return this.todoList;
        }
    }
    getTodo(id: number) {
        return this.todoList.find(elem => elem.id == id);
    }
    updateTodo(id: number) {
        const found = this.todoList.find(elem => elem.id = id);
        if (found)
            found.completed = !found.completed;
        this.saveTodoList();
    }
    deleteTodo(id: number) {
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

export default LocalService;