function factorialDivide(n, m) {
    function factorial(x) {
        if (x === 1) {
            return 1;
        }

        return x * factorial(--x);
    }

    let nFactorial = factorial(n);
    let mFactorial = factorial(m);

    let result = nFactorial / mFactorial;

    console.log(result.toFixed(2));
}

factorialDivide(5, 2);
factorialDivide(6, 2);