class Laptop {
    constructor(info, quality){
        this.isOn = false,
        this.info = info;
        this.quality = Number(quality);
    }

    get price(){
        return (800 - (this.info.age * 2) + (this.quality * 0.5));
    }

    turnOn(){
        this.isOn = true;
        this.quality--;
    }

    turnOff(){
        this.isOn = false;
        this.quality--;
    }

    showInfo(){
        let json = JSON.stringify(this.info);
        return json;
    }
}

let info = {producer: "Dell", age: 2, brand: "XPS"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)

info = {producer: "Lenovo", age: 1, brand: "Legion"}
laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
laptop.turnOn()
laptop.turnOff()
console.log(laptop.isOn)

