
class Todo {
    static lastId: number = 0;
    id: number = 0
    constructor(public text: string, public completed: boolean = false) {
        this.id = ++Todo.lastId;
        this.text = text;
        this.completed = completed;
    }
}

export default Todo;
