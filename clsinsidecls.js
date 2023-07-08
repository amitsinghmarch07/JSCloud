//class inside class
//Not in javascript
//function inside function
// *javascript, Python , C# (Not C++/Java)
// Allows both
// Python and C++


function outer( ){
    console.log("outer called");
// we have not called inner
function inner(){
    console.log("inner called");
}    
return inner;
}


var andar = outer();
andar();