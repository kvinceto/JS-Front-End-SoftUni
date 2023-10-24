function validate(x1, y1, x2, y2) {

    function innerValidate(x1, y1, x2, y2) {
        let distance = 0;

        distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

        if (Number.isInteger(distance)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
        }
        else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

    let x0 = 0;
    let y0 = 0;

    innerValidate(x1, y1, x0, y0);

    innerValidate(x2, y2, x0, y0);

    innerValidate(x1, y1, x2, y2);

}

let x1 = 3;
let y1 = 0;
let x2 = 0;
let y2 = 4;

validate(x1, y1, x2, y2);

x1 = 2;
y1 = 1;
x2 = 1;
y2 = 1;

validate(x1, y1, x2, y2);