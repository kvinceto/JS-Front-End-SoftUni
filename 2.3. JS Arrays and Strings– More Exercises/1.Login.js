function login(input) {
    let username = input.shift();
    let password = username.split('').reverse().join('');

    let counter = 0;

    for (let i = 0; i <= input.length - 1; i++) {

        let string = input[i];
        counter++;
        if (string === password) {
            console.log(`User ${username} logged in." `)
            return;
        }
        else {
            if (counter === 4) {
                console.log(`User ${username} blocked!`)
                return;
            }

            console.log('Incorrect password. Try again.');
        }
    }
}

let input = ['Acer', 'login', 'go', 'let me in', 'recA'];

login(input);

input = ['momo', 'omom'];

login(input);

input = ['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'];

login(input);