function longRun(ms){
    const start = new Date;
    while (new Date-start<ms)
    ;
}

function executor(resolve, reject){
    console.log("executor called");
    resolve("i succeeded");
    longRun(5000);

}
//*Promises are SYNCRNOUS
const pakka = new Promise(executor);
console.log("promise created");
pakka.then(result => console.log(result));
longRun(5000);
console.log("program ends");