export class Vehicle {
    constructor(license) {
        this.license = license;
        this.gpsEnabled = true;
    }

    static getCompany() {
        console.log('Company Name');
    }

    Start() {
        console.log("Starting Vehicle........");
    }

}