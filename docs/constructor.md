# Constructor Function

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
