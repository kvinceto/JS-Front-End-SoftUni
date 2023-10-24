function mine(goldPerShift) {
    const bitcoinToLeva = 11949.16;
    const goldToLeva = 67.51;

    let day = 0;
    let dayPurshasedBitcoin;
    let levsOwned = 0;
    let bitcoinOwned = 0;
    let bitcounBought = false;

    for (let shift = 0; shift <= goldPerShift.length - 1; shift++) {
        day++;
        let goldMinedToday = goldPerShift[shift];
        if (day % 3 === 0) {
            goldMinedToday = goldMinedToday - (goldMinedToday * 0.30);
        }

        levsOwned += goldMinedToday * goldToLeva;
        if (levsOwned >= bitcoinToLeva) {
            if (!bitcounBought) {
                bitcounBought = true;
                dayPurshasedBitcoin = day;
            }

            let numberOfBitcoinToBuy = Math.floor(levsOwned / bitcoinToLeva);
            bitcoinOwned += numberOfBitcoinToBuy;
            levsOwned -= numberOfBitcoinToBuy * bitcoinToLeva;
        }
    }

    console.log(`Bought bitcoins: ${bitcoinOwned}`)

    if (bitcounBought) {
        console.log(`Day of the first purchased bitcoin: ${dayPurshasedBitcoin}`)
    }

    console.log(`Left money: ${levsOwned.toFixed(2)} lv.`)
}


let goldPerShift = [100, 200, 300];

mine(goldPerShift);

goldPerShift = [50, 100];

mine(goldPerShift);

goldPerShift = [3124.15, 504.212, 2511.124];

mine(goldPerShift);