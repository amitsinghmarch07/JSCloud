import Todo from "./Todo.js";


class TodoComponent {

    todoList = []; //> will hold all todos created by the Username
    constructor(service) {
        this.service = service;
        //~% View (V)
        const template = `
          <div id="container">
          <h1>Todo App</h1>
          <input id="todo-input"/>
          <button id="add-button">Buy mil addAdd</button>
          <ul id="todo-ul" ></ul>
          </div>
          `;
        const appTodo = document.querySelector("app-todo");
        appTodo.insertAdjacentHTML("beforeend", template);

        this.todoUL = document.querySelector("#todo-ul");
        this.addButton = document.querySelector("#add-button");
        this.todoInput = document.querySelector("#todo-input");

        const todoListFetchedFromLocalService = this.service.getAllTodos();

        this.todoList = todoListFetchedFromLocalService;

        this.todoList.forEach(element => this.renderTodo(element));
        this.addButton.addEventListener("click", () => {
            const todo = new Todo(this.todoInput.value, true);
            this.todoList.push(todo);
            this.renderTodo(todo);
            console.log(this.todoList);
            this.service.addTodo(this.todoInput.value, false)
            this.todoInput.value = "";
        });
    }

    renderTodo(todo) {
        const todoLi = `
        <li>
        <input type="checkbox" ${todo.completed ? "checked" : ""}/>
        <label>${todo.text}</label>
        <button>x</button>
        </li>
        `;
        this.todoUL.insertAdjacentHTML("beforeend", todoLi);
        // this.toggleCompletedHandler(todo);
        // this.deleteTodoHandler(todo);

    }

}

export default TodoComponent;