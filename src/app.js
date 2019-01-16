//Module 4 Inheritance and Code Org
import {Vehicle} from './classes/vehicle.js';
import {Car} from './classes/car.js';

let c = new Car("abc123".toUpperCase());

console.log(((c instanceof Car) === (c instanceof Vehicle) === (c instanceof Object)))
console.log(c.license);
console.log(c.gpsEnabled);

