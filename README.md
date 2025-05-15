# JavaScript OOPC

## Tableof Contents
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
- Encapsulation is the concept of hiding the internal state of an object and requiring all interaction to be performed through an object's methods.
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

<br/><br/>

## Polymorphism

<br/><br/>

## Abstraction

<br/><br/>