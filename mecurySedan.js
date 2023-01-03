//this includes the vehicle class as a module
const VehicleModule = require('./vehicle').Vehicle

class newSedan extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)

        this.maximumPassengers = 5
        this.passenger = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 160
        this.fuel = 10
        this.scheduleService = false
    }
    
    // 1. loadPassenger(num) function: if passenger less than maximumPassengers then availableRoom == true
    loadPassenger(num) {
        if (this.passenger < this.maximumPassengers) {
            let newNum = this.passenger + num
            if (newNum <= this.maximumPassengers) {
                this.passenger = newNum
                return this.passenger
            } else {
                console.log("The vehicle does not have space")
            }

        } else {
            console.log("The vehicle is full")
        }
    }

    // 2. start() function: if fuel is greater than 0, then start == true
    start() {
        if (this.fuel > 0) {
            this.started == true
            console.log("The vehicle has started")

        } else {
            console.log("Has not started")
        }
    }

    // 3. scheduleService(mileage) function: if mileage is greater than 30000, time for maintenance == true
    scheduleService(mileage){
        if(this.mileage > 30000) {
            this.scheduleService = true
            console.log("Time for maintenance")
            return this.scheduleService

        } else {
            console.log("Not time for maintenance")
        }
    }
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
