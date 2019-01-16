//Module 3 Class Basics

//_property -> intended to be private used with getters and setters.


class Drone {
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }

    static getCompany() {
        console.log('in getCompany');
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    fly() {
        console.log('Drone '+this.id+' is flying');
    }
}

//statics and are not instances.
Drone.maxHeight = 2000;


let drone = new Drone('123', 'Flyer');
let drone2 = new Drone('456', 'Twirl');

console.log('Drone: ' + drone.id + '\nName: ' + drone.name);
console.log(drone.maxHeight); //undefined.
console.log(Drone.maxHeight); //2000.
drone.fly()
drone2.fly()
//drone.getCompany(); //static -> undefined
Drone.getCompany(); //"in getCompany"
