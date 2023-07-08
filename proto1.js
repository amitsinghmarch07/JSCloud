function Employee(id,name){
    this.id = id;
    this.name = name;
}
Employee.count = 10;
Employee.prototype.printDetail = function(){
    console.log("prototype function");

}
var eich = new Employee( 1, "Brendan");
eich.printDetail();
console.log(eich.count);
console.log(Employee.count);
console.log(eich.id);
console.log(eich.name);
console.log("Done");