function isLeap(year) {
    let result;

    if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
        result = 'yes';
    }
    else {
        result = 'no';
    }

    console.log(result)
}

let year = 1984;

isLeap(year);

year = 2003;

isLeap(year);

year = 4;

isLeap(year);

year = 2000;

isLeap(year);