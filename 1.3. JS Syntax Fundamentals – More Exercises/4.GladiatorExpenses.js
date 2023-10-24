function calculate(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let output;

    let helmetBrake = Math.floor(lostFightsCount / 2);
    let swordBrake = Math.floor(lostFightsCount / 3);
    let shieldBrake = Math.floor(lostFightsCount / 6);
    let armorBrake = Math.floor(lostFightsCount / 12);

    let cost = helmetPrice * helmetBrake + swordPrice * swordBrake + shieldPrice * shieldBrake + armorPrice * armorBrake;

    output = `Gladiator expenses: ${cost.toFixed(2)} aureus`;
    console.log(output);
}


let lostFightsCount = 7;
let helmetPrice = 2;
let swordPrice = 3;
let shieldPrice = 4;
let armorPrice = 5;

calculate(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice);

lostFightsCount = 23;
helmetPrice = 12.50;
swordPrice = 21.50;
shieldPrice = 40
armorPrice = 200;

calculate(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice);