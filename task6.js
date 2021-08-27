// let i = 0;
// let a = 1;
// let sum = 0;
// let q = 0;
// let sum2 = 0;

// while (i < 10) {
//     i++
//     let a = Math.pow(i, 2)
//     sum += a
//     while (q < 10) {
//         q++
//         sum2 += q
//         p = Math.pow(sum2, 2)
//     }
// }
// let differ = p - sum;

// console.log(differ)




function task_6 (n) {
    let i = 0;
    let a = 1;
    let sum = 0;
    let q = 0;
    let sum2 = 0;
    
    while (i < n) {
        i++
        let a = Math.pow(i, 2)
        sum += a
        while (q < n) {
            q++
            sum2 += q
            p = Math.pow(sum2, 2)
        }
    }
    let differ = p - sum;
}
let result = task_6(10);
console.log(result);


