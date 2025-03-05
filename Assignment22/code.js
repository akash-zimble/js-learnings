class Car{
    constructor(brand){
        this.brand = brand;
    }

    getBrand (){
        return this.brand;
    }
}

class Model extends Car{
    constructor(brand, model){
        super(brand);
        this.model = model;
    }

    getModel (){
        return this.model;
    }

    getCarInfo(){
        return "This car is from "+this.getBrand()+" brand and model is "+ this.model; // model does not have getBrand method. It is inherited from Car class.
    }
}


let hondaCity = new Model("Honda", "Honda City");

console.log(hondaCity.getCarInfo());