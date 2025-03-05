/**
 * In js all functions are methods of Objects. If a function is a not a method of any Object, then it is a method of global object.
 * 
 *  All three call, apply and bind used to invoke functions by passing objects as arguments.
 */

function printCarInfo(price){
    console.log("Brand: "+this.brand+", Model: "+this.model+", Cost: "+price);
}

let car1 = {
    brand: "Honda",
    model: 'City'
}

class Car{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
}

let car2 = new Car("Audi","v8");
printCarInfo.call(car1, 25000);
printCarInfo.call(car2, 35000);

printCarInfo.apply(car1,[25000]);
printCarInfo.apply(car2,[35000]);

// The call and apply apply both are same. These invoke method immediately. And main difference between these 2 is how we pass arguments
// For call we pass arguments normally, but for apply we pass arguments in array.

let car2Info = printCarInfo.bind(car2);
car2Info(65000);

// Unlike call and apply, bind does not invoke the method immediately.
// Instead, bind returns a new function which can be called later when needed.
// The new function remembers which object (car2) it is permanently tied to.
// This way, the method can be shared across objects while keeping the right 'this'.