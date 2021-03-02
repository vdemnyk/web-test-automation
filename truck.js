const Vehicle = require('./vehicle');

class Truck extends Vehicle{ 
    constructor(carModel, carYear, maxSpeed){ 
        super(carModel, carYear, maxSpeed); 
        this.type = 'truck'; 
        this.color = 'red';
    } 

    transportContainer(){ 
        console.log('I am starting transporting heavy container.'); 
    } 

    displayInfo(){ 
        console.log(
       `Name: ${this.model}; 
        Year: ${this.year}; 
        Type: ${this.type};
        Color: ${this.color}`); 
    }
} 

module.exports = Truck;