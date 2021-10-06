function isPrime(num) {
    for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}


function getPrimes(num) {
    const primes = [];

    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes[primes.length-1];
}

console.log(getPrimes(10001));
