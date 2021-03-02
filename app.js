const vehicle = require('./vehicle');
const car = require('./car');
const truck = require('./truck');

let bmw = new car.Car('BMW', 2000, 220);
bmw.displayInfo();
bmw.transportPeople();

let man = new truck.Truck('MAN', 2010, 150);
man.displayInfo();
man.transportContainer();

vehicle.Vehicle.greeting();