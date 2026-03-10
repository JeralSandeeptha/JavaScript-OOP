# Functions

- There are two types of functions in JS OOP
    - Instance Functions
    - Static Functions

## Instance Functions
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

## Static Functions
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