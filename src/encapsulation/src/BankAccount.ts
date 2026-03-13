class BankAccount {

    private name: string;
    private balance: number;

    constructor(name: string, balance: number) {
        this.name = name;
        this.balance = balance;
    }

    // Open an account
    openAccount(): void {
        console.log(`${this.name} created a new bank account`);
    }

    // Withdraw money
    withdraw(amount: number) {
        this.balance = this.balance - amount;
        console.log(`${amount} amount was withdrawn`);
    }

    // Deposit money
    deposit(amount: number) {
        this.balance = this.balance + amount;
        console.log(`${amount} added to the account`);
    }

    // See the balance
    get getBalance(): number {
        return this.balance;
    }
}

export default BankAccount;
