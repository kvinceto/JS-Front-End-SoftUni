class Vehicle{
    constructor(type, model, parts, fuel){
        this.type = type;
        this.model = model;
        this.parts = parts,
        this.parts.quality = parts.engine * parts.power;
        this.fuel = fuel;
    }

    drive(fuelLoss){
        this.fuel -= Number(fuelLoss);
    }
}

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);

parts = {engine: 9, power: 500};
vehicle = new Vehicle('l', 'k', parts, 840);
vehicle.drive(20);
console.log(vehicle.fuel);
