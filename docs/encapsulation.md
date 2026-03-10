# Encapsulation

- `Encapsulation` is the concept of hiding the internal state of an object and requiring all interaction to be performed through an object's methods.
- This helps to:
    - Protect object data from direct access.
    - Prevent unintended interference or misuse.
    - Control how data is accessed or modified.

```js
class User {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    get getName() {
        return this.#name;
    }

    get getAge() {
        return this.#age;
    }

    set setName(name) {
        this.#name = name;
    }

    set setAge(age) {
        this.#age = age;
    }
}

const user = new User('Jeral', 25);

// User {} — name and age are private
console.log(user); 

// ✅ Use getter properties (not methods)
console.log(user.getName); // Jeral
console.log(user.getAge);  // 25

// ✅ Use setter properties with assignment syntax
user.setName = 'Jeral Sandeeptha';
user.setAge = 100;

console.log(user.getName); // Jeral Sandeeptha
console.log(user.getAge);  // 100
```

### 🔁 Quick Reminder

| Type   | Declare like                      | Use like                  |
|--------|-----------------------------------|---------------------------|
| Getter | `get name() {}`                  | `obj.name`                |
| Setter | `set name(value) {}`             | `obj.name = 'value'`      |
| Method | `name() {}`                      | `obj.name()`              |
