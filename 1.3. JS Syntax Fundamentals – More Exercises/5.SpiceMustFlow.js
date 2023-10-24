function solve(startingYield) {
    let days = 0;
    const consumeSpicePerDay = 26;
    const daulyDropOfSpice = 10;
    let spiceMined = 0;

    while (true) {
        if (startingYield >= 100) {
            days++;
            spiceMined += startingYield;
            spiceMined -= consumeSpicePerDay;
            startingYield -= daulyDropOfSpice;
        }
        else {
            if (spiceMined >= consumeSpicePerDay) {
                spiceMined -= consumeSpicePerDay;
                break;
            }
            else {
                spiceMined = 0;
                break;
            }
        }
    }

    console.log(days);
    console.log(spiceMined);
}

let startingYield = 111;

solve(startingYield);

startingYield = 450;

solve(startingYield);