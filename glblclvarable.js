//~! Global variable

g = 10;

var x = 10;
var y = 15;

function add(a, b) {
    var c;           //~* Local to function
    c = a + b;
    return c;
}
var result = add(x, y);
console.log(result);
console.log(add.toString());