function isPerfectNumber(number) {
    number = Number(number);
    let result;

    if (number <= 0) {
        result = "It's not so perfect.";
        return result;
    }

    function isPerfectNumber(n) {
        // Check if the number is even. Perfect numbers must be even.
        if (n % 2 !== 0) {
            return false;
        }

        // Calculate the sum of the proper divisors of the number.
        let sumOfDivisors = 1;
        for (let i = 2; i <= n / 2; i++) {
            if (n % i === 0) {
                sumOfDivisors += i;
            }
        }

        // Return true if the sum of the proper divisors is equal to the number.
        return sumOfDivisors === n;
    }

    result = isPerfectNumber(number) ? "We have a perfect number!" : "It's not so perfect.";
    return result;
}


console.log(isPerfectNumber(6));
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(1236498));
