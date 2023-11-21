function createArmies(input) {
    let map = new Map();
    let leaderRegex = new RegExp(/[\w+ ]+ arrives/gm);
    let armyRegex = new RegExp(/[\w+ ]+: [\w+ ]+, [\d+]+/gm);
    let armyCountRegex = new RegExp(/[\w+ ]+ [\d+]+/gm);
    let deadRegex = new RegExp(/[\w+ ]+ defeated/gm);

    input.forEach(element => {
        if (element.match(leaderRegex)) {
            let leader = element.replace(' arrives', '');
            map.set(leader, {});
        } else if (element.match(armyRegex)) {
            let [leaderName, other] = element.split(': ');
            let [army, count] = other.toString().split(', ');
            if (map.has(leaderName)) {
                let value = map.get(leaderName);
                value[army] = Number(count);
                map.set(leaderName, value);
            }
        } else if (element.match(armyCountRegex)) {
            let [armyName, countTroups] = element.split(' + ');
            for (const key of map.keys()) {
                let element = map.get(key);
                if (element.hasOwnProperty(armyName)) {
                    let count = element[armyName];
                    count += Number(countTroups);
                    element[armyName] = count;
                }
            }
        } else if (element.match(deadRegex)) {
            let leader = element.replace(' defeated', '');
            if (map.has(leader)) {
                map.delete(leader);
            }
        }
    });

    let leaders = Array.from(map.entries()).map(([leader, armies]) => {
        let totalArmyCount = Object.values(armies).reduce((acc, count) => acc + count, 0);
        return { leader, totalArmyCount, armies };
    });

    leaders.sort((a, b) => b.totalArmyCount - a.totalArmyCount);

    leaders.forEach(leader => {
        console.log(`${leader.leader}: ${leader.totalArmyCount}`);
        Object.entries(leader.armies).sort((a, b) => b[1] - a[1]).forEach(([army, count]) => {
            console.log(`>>> ${army} - ${count}`);
        });
    });
}

createArmies(['Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205']
);

createArmies(['Rick Burr arrives',
    'Findlay arrives',
    'Rick Burr: Juard, 1500',
    'Wexamp arrives',
    'Findlay: Wexamp, 34540',
    'Wexamp + 340',
    'Wexamp: Britox, 1155',
    'Wexamp: Juard, 43423']
);
