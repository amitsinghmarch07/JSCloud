//reduce array
var array = [11 , 23, 36];



console.log("result", result);
function accumulate(total,value){
    console.log('total',${total},value ${value}')
    return total +value;

}
var result = array.result(accumulate);
console.log("accumulate" ,result);
var expances = [
    {txn:1 , desc:"Zomato" , amount: 450},
    {txn:1 , desc:"Uber" , amount: 650},
    {txn:1 , desc:"Amazone" , amount: 2100},
    
];
var total = expances.reduce( (total,exp) = > total +exp .amount);

console.log("total",total);

var sum = expances.reduce( (total,exp) => total +exp.amount = 0);
console.log("sum", sum);

var languages = ["c", "c++" , "pythan" , "Java" , "Javascript" ];

var all = languages.reduce( (final , lang) => final + "," +lang, "Pascal");
confirm.log("all" , all);

var all = languages.join(",");
console.log("join", all);



  