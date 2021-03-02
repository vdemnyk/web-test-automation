const vehicle = require('./vehicle');

class Car extends vehicle.Vehicle{ 
    constructor(carModel, carYear, maxSpeed){ 
        super(carModel, carYear, maxSpeed); 
        this.type = 'car';
    } 

    transportPeople(){ 
        console.log('I am starting transporting passengers.');
    }
}

exports.Car = Car;