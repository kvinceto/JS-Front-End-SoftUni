function solve(input) {
    class Row {
        constructor(town, latitude, longitude) {
            this.town = town;
            this.latitude = latitude;
            this.longitude = longitude;
        }
    }
    let rows = [];

    input.forEach(element => {
        let arr = element.split(' | ');
        let town = arr[0];
        let latitude = new Number(arr[1]).toFixed(2);
        let longitude = new Number(arr[2]).toFixed(2);
        rows.push(new Row(town, latitude, longitude));
    });

    rows.forEach(x => {
        console.log(`{ town: '${x.town}', latitude: '${x.latitude}', longitude: '${x.longitude}' }`);
    });
}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);

solve(['Plovdiv | 136.45 | 812.575']);