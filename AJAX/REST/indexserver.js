const http = require("node:http");

const server = http.createServer(handler);

console.log("REST Server is running on port 10000");
server.listen(12000);

function handler(req, res) {
    console.log("handler has been called");
    res.write(`{"data":{"id:"1","name":"Brendan"}}`);
    res.end();
}
