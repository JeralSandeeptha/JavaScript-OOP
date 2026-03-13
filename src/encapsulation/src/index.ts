import BankAccount from "./BankAccount.js";

// create user one
const jeral = new BankAccount("Jeral", 100000);

// jeral open an account
console.log(jeral.openAccount());
console.log(jeral.getBalance);
console.log(jeral.deposit(5000));
console.log(jeral.getBalance);
console.log(jeral.withdraw(10000));
console.log(jeral.getBalance);
console.log(jeral);
