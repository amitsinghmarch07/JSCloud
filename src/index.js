//~!Model (M)
class Todo {
   static lastId = 0;
   constructor(text,completed=false) {
      this.id = ++Todo.lastId;
      this.text = text;
      this.completed = completed;
   }
  }
  //~*Controller (C)
  class TodoComponent {
  
      todoList = []; //> will hold all todos created by the Username
      constructor() {
  
          //~% View (V)
          const template = `
          <div id="container">
          <h1>Todo App</h1>
          <input id="todo-input"/>
          <button id="add-button">Buy milAdd</button>
          <ul id="todo-ul" ></ul>
          </div>
          `;
          const appTodo = document.querySelector("app-todo");
          appTodo.insertAdjacentHTML("beforeend" , template);
  
          const todoUL = document.querySelector("#todo-ul");
          const addButton = document.querySelector("#add-button");
          const todoInput = document.querySelector("#todo-input");
         
          addButton.addEventListener("click", () =>{
           
          const todo = new Todo(todoInput.value, true);
          this.todoList.push(todo);
          console.log(this.todoList);
          
          todoUL.insertAdjacentHTML("afterbegin", `
          <li>
              <input type="checkbox" ${todo.completed?"checked":""}/>
              <label>${todo.text}</label>
              <button>x</button>
          </li>
          `);
          todoInput.value = "";
      });
      
  
      }

  }
  
  document.addEventListener("DOMContentLoaded",() => {
   const todoComponent = new TodoComponent();
});