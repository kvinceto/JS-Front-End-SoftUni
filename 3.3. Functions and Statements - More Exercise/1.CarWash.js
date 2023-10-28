function solve(...args) {
    let value = 0;

    args.forEach(a => {
        switch (a) {
            case 'soap': value += 10; break;
            case 'water': value += value * 0.20; break;
            case 'vacuum cleaner': value += value * 0.25; break;
            case 'mud': value -= value * 0.10; break;
            default: break;
        }
    })

    console.log(`The car is ${value.toFixed(2)}% clean.`)
}

solve('soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water');
solve("soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner");