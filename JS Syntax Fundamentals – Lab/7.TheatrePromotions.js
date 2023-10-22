function calculatePrice(type, age) {
    let result;

    if (age >= 0 && age <= 18) {

        if (type === 'Weekday') {
            result = '12$';
        }
        else if (type === 'Weekend') {
            result = '15$';
        }
        else if (type === 'Holiday') {
            result = '5$';
        }
        else {
            result = 'Error!';
        }
    }
    else if (age > 18 && age <= 64) {

        if (type === 'Weekday') {
            result = '18$';
        }
        else if (type === 'Weekend') {
            result = '20$';
        }
        else if (type === 'Holiday') {
            result = '12$';
        }
        else {
            result = 'Error!';
        }
    }
    else if (age > 64 && age <= 122) {
        if (type === 'Weekday') {
            result = '12$';
        }
        else if (type === 'Weekend') {
            result = '15$';
        }
        else if (type === 'Holiday') {
            result = '10$';
        }
        else {
            result = 'Error!';
        }
    }
    else {
        result = 'Error!';
    }

    console.log(result);
}

let dayType = 'Weekday';
let age = 42;

calculatePrice(dayType, age);

dayType = 'Holiday';
age = -12;

calculatePrice(dayType, age);

dayType = 'Holiday';
age = 15;

calculatePrice(dayType, age);