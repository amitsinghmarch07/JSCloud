class Account {
    // private accountNumber: number;
    //public holderName: string;
    //protected balance: number;
    constructor(private accountNumber: number, public holderName: string, protected balance: number) {
       // this.accountNumber = an;
        //this.holderName = hn;
        //this.balance = bal;
    }
    public withdraw(amount: number) {
        this.balance -= amount;
    }

    public deposit(amount: number) {
        this.balance += amount;
    }
    public print() {
        console.log(this.accountNumber, this.holderName, this.balance);
    }
}
class savingAccount extends Account {
public withdraw(amount: number): void {
    if (this.balance - amount
}
}