function outer() {
//local varable of zoo
var tiger = "Zinda hai";
var lion = "zaroor marega";


function inner(){
// using variables from outer scope
// will be "captured" in a closure
console.lsog("tiger " ,  tiger);

}
//local variable tiger and lion
// will be destroyed
return inner;
}
// we get reference to inner function
var inner = outer();
// which we call and tiger is in closure
inner();