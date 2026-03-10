## Abstraction

- `Abstraction` means hiding complex implementation details and showing only the essential features of an object or system.
- 💡 Think of a car: you don’t need to know how the engine works to drive it — you just use the steering, pedals, and gear.

### ✅ Why Use Abstraction?
- Simplifies code by hiding unnecessary details.
- Increases security by exposing only the intended API.
- Makes your code easier to maintain and extend.

### ✅ Abstraction in JavaScript
- JavaScript doesn’t have built-in support for abstraction like abstract classes in Java, but you can achieve abstraction using:
    - Functions and Closures
    - Classes and Private Fields/Methods
    - Interfaces (simulated using duck typing)

```js
class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
console.log(account.#balance); // ❌ Syntax Error (it's private)
```
