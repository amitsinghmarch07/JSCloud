function Account(hn, bal) {
    this.hn = hn;
    this.bal = bal;
}

Account.prototype.deposit = function (amount) {
    this.bal = this.bal + amount;
    this.print();
}

Account.prototype.withdraw = function (amount) {
    this.bal = this.bal - amount;
    this.print();
}

Account.prototype.print = function () {
    console.log(`amount is ${this.bal}`)
}

var eich = Account("brajbhsushan", 200000);

eich.deposit(2000);
eich.withdraw(3000);