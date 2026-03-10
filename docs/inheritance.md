# Inheritance
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
