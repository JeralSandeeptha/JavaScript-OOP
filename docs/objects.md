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
