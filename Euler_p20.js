console.log(problem20(100));

function problem20(n = 10) {
/*

n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/

  const bigInt = require('big-integer');
  let x = bigInt(sFact(n));


  let sum = 0;
  while (x > 0) {
    sum += bigInt(x).mod(10);
    x = bigInt(x).over(10); // Over is an alias for divide.
  }

  return sum;
}

function sFact(num) {
  const bigInt = require('big-integer');
  let x = bigInt(1);
  for (let i = 2; i <= num; i++) {
    x = bigInt(x).multiply(i);
  }
  return x;
}
