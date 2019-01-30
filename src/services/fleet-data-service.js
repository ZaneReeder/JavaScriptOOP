import {Car} from "../classes/car.js"
import {Drone} from "../classes/drone.js"
import {DataError} from "./data-error.js"



export class FleetDataService {

    constructor() {
        this.cars = [];
        this.drones = [];
        this.errors = [];
    }

    loadData(fleet) {
        for (let data of fleet) {
            switch(data.type) {
                case 'car' : 
                    let car = this.loadCar(data);
                    this.cars.push(car); 
                    break;

                case 'drone' : 
                    let drone = this.loadDrone(data);
                    this.drones.push(drone); 
                    break;

                default:
                    let e = new DataError('Invalid Vehicle Type', data);
                    this.errors.push(e);
                    break;
            }
        }
    }

    loadCar(car) {
        try {
            let c = new Car(car.license, car.model, car.latLong);
            c.miles = car.miles;
            c.make = car.make;
            return c;
        }
        catch (e) {
            this.errors.push(new DataError('Error loading car', car));
        }
    }

    loadDrone(drone) {
        let d = new Drone(drone.license, drone.model, drone.latLong);
        d.airTime = drone.airTime;
        d.base = drone.base;
        return d;
    }

    getCarByLicense(license) {
        return this.cars.find(function(car) {
            return car.license === license;
        });
    }

    getCarsSortedByLicense() {
        return this.cars.sort(function (car1, car2) {
            if (car1.license < car2.license)
                return -1;
            if (car1.license > car2.license)
                return 1;
            return 0;   
        });
    }

    filterCarsByMake(filterStr) {
        return this.cars.filter(car => car.make.toUpperCase().indexOf(filterStr) >=0);
    }
}

