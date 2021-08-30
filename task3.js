number = 600851475143;
i = 2;
result = 1;
while (i <= number) {
    while (number % i == 0) {
        result = i;
        number /= i;
    }
    i++;
}
console.log(result);

