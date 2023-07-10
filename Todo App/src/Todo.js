"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Todo {
    text;
    completed;
    static lastId = 0;
    id = 0;
    constructor(text, completed = false) {
        this.text = text;
        this.completed = completed;
        this.id = ++Todo.lastId;
        this.text = text;
        this.completed = completed;
    }
}
exports.default = Todo;
