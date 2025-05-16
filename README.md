# JavaScript OOPC

## Table of Contents
- [Introduction](#introduction)
- [Object](#object)
- [Class](#class)
- [Constructor Function](#constructor-function)
- [Functions](#functions)
- [Function Chaining](#function-chaining)
- [Encapsulation](#encapsulation)
- [Inheritance](#inheritance)
- [Polymorphism](#polymorphism)
- [Abstraction](#abstraction)

## Introduction
- `OOP` is a programming paradigm based on the concept of `objects`, which contain data (fields/properties) and methods (functions). 
- `JavaScript` supports:
    - `Encapsulation`: Keeping data safe inside objects.
    - `Abstraction`: Hiding complex details.
    - `Inheritance`: Reusing code from existing classes.
    - `Polymorphism`: Overriding methods in child classes.

<br/><br/>

## Object
- An instance of a `Class`
- `Everything in JS, is an Object`
- `Objects` are quite like real world any objects
- `Object` has `features` as known as `properties` and `behaviours` as known as `functions`
- The object can be created in two ways in JavaScript:
    - `Object Literal`
    - `Object Constructor`

```js
// Object Literals
const car = {
  brand: "Toyota",
  start: function () {
    console.log("Car started");
  }
};

// Object Constructor
console.log(car.brand);
console.log(car.start());
console.log(car['brand']);

// Change the values
car.brand = 'Ford';

// Give another property
car.type = 'Vitz';

// With Constructor
var vechicle = new Vechicle(); 
```

<br/><br/>

## Class
- Defines the structure and behavior of objects
- `Blueprint` of Objects

```js
class User {

}
```

<br/><br/>

## Construtor Function
- A function that create a `Object`
- A special method within a class that is automatically called when an object is created
- It is used to initialize the object's properties

- With constructor function we can able to create a new object with that relavant class
```js
class User {

    constructor() {

    }
}

var userOne = new User();
console.log(userOne);
```

- We can set default values with constructor function
```js
class User {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}

var userOne = new User('Jeral', 25);
console.log(userOne);
```

<br/><br/>

## Functions
- There are two types of functions in JS OOP
    - Instance Methods
    - Static Methods

### Instance Methods
- These are the most common type of method
- Operating on individual object instances 
- They have access to the instance's properties and can modify them
```js
class User {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    address = 'Ragama;

    register() {
        console.log('User registered');
        return this;
    }
    login() {
        console.log('User loggedin');
        return this;
    }
    logout() {
        console.log('User loggedout');
        return this;
    }
}

const user = new User('Jeral', 25);
user.register()
user.logout();
user.login(); 
console.log(user.address);
```

### Static Methods
- These methods are associated with the class itself, not with instances 
- They are called directly on the class and do not have access to instance-specific data.
```js
class MathUtils {
  static PI = 3.14159;

  static square(x) {
    return x * x;
  }
}

console.log(MathUtils.square(4)); // 16
console.log(MathUtils.PI); // 3.14159
```

<br/><br/>

## Function Chaining
```js
class User {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    register() {
        console.log('User registered');
        return this;
    }
    login() {
        console.log('User loggedin');
        return this;
    }
    logout() {
        console.log('User loggedout');
        return this;
    }
}

const user = new User('Jeral', 25);
user.register().login().logout();
```

<br/><br/>

## Encapsulation
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

<br/><br/>

## Inheritance
- `Inheritance` allows you to create new classes or objects that reuse, extend, or modify the behavior of existing ones.
- We can access parent features thorugh the child

```js
class Animal{

    #name;

    constructor(name){
        this.#name = name;
    }

    eat() {
        console.log('Animal is eating....!');
    }
    run() {
        console.log('Animal is running....!');
    }
    sleep() {
        console.log('Animal is sleeping....!');
    }
}

class Dog extends Animal{

    #breed;

    constructor(breed){
        super(breed);
        this.#breed = breed;
    }
}

const dog = new Dog();
dog.eat();
dog.run();
dog.sleep();
```

- With this we can override the parent functionality thorugh the child without affecting to parent functionality
```js
class Animal{

    #name;

    constructor(name){
        this.#name = name;
    }

    eat() {
        console.log('Animal is eating....!');
    }
    run() {
        console.log('Animal is running....!');
    }
    sleep() {
        console.log('Animal is sleeping....!');
    }
}

class Dog extends Animal{

    #breed;

    constructor(breed){
        super(breed);
        this.#breed = breed;
    }

    eat() {
        super.eat();
        console.log('Dog is eating....!');
    }
    run() {
        console.log('Dog is running....!');
    }
    sleep() {
        console.log('Dog is sleeping....!');
    }
}

const dog = new Dog();
dog.eat();
dog.run();
dog.sleep();
```

- We can check the inheritance 
```js
dog instanceof Dog;       // true
dog instanceof Animal;       // true

Dog.prototype.isPrototypeOf(dog); // true
Animal.prototype.isPrototypeOf(dog); // true
```

<br/><br/>

## Polymorphism
- `Polymorphism` means "many forms." In OOP, it allows objects of different types to be treated as instances of the same class through a shared interface, typically via method overriding or method overloading.
- `Polymorphism` allows you to use a single function/method name to behave differently based on the object that is invoking it.

```js
class Animal {
  speak() {
    console.log("Animal makes a sound.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks.");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows.");
  }
}

const animals = [new Dog(), new Cat(), new Animal()];

animals.forEach(animal => animal.speak());
```

| Concept             | JavaScript Support | Description                                      |
|---------------------|--------------------|--------------------------------------------------|
| Method Overriding   | ✅ Yes             | Subclasses override parent methods               |
| Function Overloading| ⚠️ Limited        | Can be simulated using `arguments`              |
| Dynamic Dispatch    | ✅ Yes             | Method called is determined at runtime           |
| Polymorphic Arrays  | ✅ Yes             | Arrays with multiple subclass instances          |

<br/><br/>

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

<br/><br/>