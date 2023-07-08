'use strict'
// gfn = function () {
//     console.log(`gfn ${this}`);
// }
var vfn = function () {
    this.id = 123;
    console.log(`vfn ${this}`);
}

//`
function lfn() {
    console.log(`lfn ${this}`);
}

var person = {
    id: 1,
    name: "Brendon",
    print: function () {
        console.log(`person ${this}`);
    }
}

person.print();

person = {
    id: 2,
    name: "amit",
    print: function () {
        console.log(`new person ${typeof this}`);
    }
}

person.print();


vfn();

lfn();