function Car(name, type){
    this.name = name;
    this.type = type;
}

Car.prototype.carInfo = function(){
    console.log(this.name+" "+this.type)
}


let hondaCity = new Car("Honda City", "Sedan");
let tataTigao = new Car("Tata Tiago", "Hatchback");

hondaCity.carInfo();
tataTigao.carInfo();

// function Car is a constructor method for Object Car.
// And i added carInfo method for Car using prototype inheritance.
// Noe this carInfo will be inherited to all objects created from Car constructor

// What happens internally:
//      JavaScript looks for carInfo directly on hondaCity — it’s not there.
//      It looks up the prototype chain and finds carInfo in Car.prototype.
//      It executes carInfo, with this referring to hondaCity.


/**
 * Advantages: 
 *      Saves memory: Methods are shared, not duplicated in every instance(It wont create carInfo for hondaCity or tataTigao).
 *      Inheritance: We can create further constructors that inherit from Animal.
 */
