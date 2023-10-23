function checkSpeed(speed, area) {
    let limit;

    switch (area) {
        case 'motorway': limit = 130; break;
        case 'interstate': limit = 90; break;
        case 'city': limit = 50; break;
        case 'residential': limit = 20; break;
    }

    let isInTheLimit = speed <= limit ? true : false;
    if (isInTheLimit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    }
    else {
        let over = speed - limit;
        let status;

        if (over <= 20) {
            status = 'speeding';
        }
        else if (over <= 40) {
            status = 'excessive speeding'
        }
        else if (over > 40) {
            status = 'reckless driving';
        }

        console.log(`The speed is ${over} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}


let speed = 40;
let area = 'city';

checkSpeed(speed, area);

speed = 21;
area = 'residential';

checkSpeed(speed, area);

speed = 120;
area = 'interstate';

checkSpeed(speed, area);

speed = 200;
area = 'motorway';

checkSpeed(speed, area);