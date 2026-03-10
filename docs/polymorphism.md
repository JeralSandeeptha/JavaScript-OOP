# Polymorphism

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
