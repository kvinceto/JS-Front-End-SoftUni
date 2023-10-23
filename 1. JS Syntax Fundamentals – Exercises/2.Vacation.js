function calculatePrice(count, type, day) {
    let price;
    let result;

    if (type === 'Students') {
        switch (day) {
            case 'Friday': price = 8.45; break;
            case 'Saturday': price = 9.80; break;
            case 'Sunday': price = 10.46; break;
        }
    }
    else if (type === 'Business') {
        switch (day) {
            case 'Friday': price = 10.90; break;
            case 'Saturday': price = 15.60; break;
            case 'Sunday': price = 16; break;
        }
    }
    else if (type === 'Regular') {
        switch (day) {
            case 'Friday': price = 15; break;
            case 'Saturday': price = 20; break;
            case 'Sunday': price = 22.50; break;
        }
    }

    result = count * price;

    if (type === 'Students' && count >= 30) {
        result = result - (result * 0.15);
    }

    if (type === 'Business' && count >= 100) {
        result = result - (price * 10);
    }

    if (type === 'Regular' && (count >= 10 && count <= 20)) {
        result = result - (result * 0.05);
    }

    console.log(`Total price: ${result.toFixed(2)}`)

}


let countOfPeople = 30;
let groupType = 'Students';
let day = 'Sunday';

calculatePrice(countOfPeople, groupType, day);

countOfPeople = 40;
groupType = 'Regular';
day = 'Saturday';

calculatePrice(countOfPeople, groupType, day);