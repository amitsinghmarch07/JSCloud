
class Todo {
    static lastId = 0;
    constructor(text, completed = false) {
        this.id = ++Todo.lastId;
        this.text = text;
        this.completed = completed;
    }
}

export default Todo;
