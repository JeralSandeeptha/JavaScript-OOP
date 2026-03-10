# Object
- An instance of a `Class`
- `Everything in JS, is an Object`
- `Objects` are quite like real world any objects
- `Object` has `features` as known as `properties` and `behaviours` as known as `functions`
- The object can be created in two ways in JavaScript:
    - `Object Literal`
    - `Object Constructor`

```js
// Object Literals
// An object literal is the simplest and most common way to create an object.
const car = {
  brand: "Toyota",
  start: function () {
    console.log("Car started");
  }
};

// Object Constructor
// An object constructor is a function used to create multiple objects with the same structure.
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log("Hello!");
  };
}

const person1 = new Person("Alex", 20);
const person2 = new Person("Sam", 25);

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
