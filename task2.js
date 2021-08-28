function fibEvenSum(limit) {
    let prev = 1,
        current = 2,
        next;

    let sum = 2;

    do {
        next = prev + current;
        prev = current;
        current = next;

        if (current >= limit)
            break;

        if (current % 2 == 0)
            sum += current;
    } while (true)

    return sum;
}
let r = fibEvenSum(4000000);
console.log(r);
