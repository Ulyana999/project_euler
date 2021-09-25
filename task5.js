const nok = (...arr) => {
  const nod = (x, y) => (!y ? x : nod(y, x % y))
  const nok = (x, y) => x * y / nod(x, y);
  return [...arr].reduce((a, b) => nok(a, b));
}
console.log(nok(1,2,3,4,5,6,7,8,9,10)); // 2520
console.log(nok(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20)); //232792560
