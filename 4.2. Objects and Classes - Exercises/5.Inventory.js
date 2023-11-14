function createRegister(input) {
    let heroes = [];

    class Hero{
        constructor(name, level , items){
            this.name = name;
            this.level = new Number(level);
            this.items = items;
        }
    }

    input.forEach(element => {
        let [heroName, heroLevel, items] = element.split(' / ');
        heroes.push(new Hero(heroName, heroLevel, items));
    });

    let sorted = Array.from(heroes).sort((a, b) => a.level - b.level);

    sorted.forEach(x => {
        console.log(`Hero: ${x.name}`);
        console.log(`level => ${x.level}`);
        console.log(`items => ${x.items}`);
    })
}

createRegister([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);

createRegister([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]
);