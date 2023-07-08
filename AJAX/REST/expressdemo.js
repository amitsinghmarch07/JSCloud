const express = require("express");
const app = express();

const todoList = [
    { id: 1, text: "By Paneer", completed: false },
    { id: 2, text: "By Milk", completed: false }
];

app.post("/", (req,))
app.get("/", (req, res) => {
    res.send(todoList);
})

app.listen(40000, () => console.log("running"));