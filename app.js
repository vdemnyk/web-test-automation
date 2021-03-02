const Vehicle = require('./vehicle');
const Car = require('./car');
const Truck = require('./truck');

let bmw = new Car('BMW', 2000, 220);
bmw.displayInfo();
bmw.transportPeople();

let man = new Truck('MAN', 2010, 150);
man.displayInfo();
man.transportContainer();

Vehicle.greeting();