import {Vehicle} from './vehicle.js';

export class Car extends Vehicle {
    constructor(license) {
        super(license);
        this.gpsEnabled = false;
    }
   
    static getCompany() {
        super.getCompany();
        console.log('Subsidary Company Name');
    }

    Start() {
        super.Start();
        console.log("Starting Car....");
    }
}