console.log(problem16(1000));

function problem16(n=15){

  /*
  Problem:

  2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

  What is the sum of the digits of the number 2^1000?

  Solution:  start with installing big integer library "npm install big-integer"

  js Number is only good to about 2^53.  So if you try it without a big number
  library, it works, but you get the answer 1189. Which is a result of rounding.
  */
  var bigInt = require("big-integer");

  var x= bigInt(2**n);

  let sum = 0;
  while (x > 0){
    sum = sum + bigInt(x).mod(10);
    x = bigInt(x).over(10);  //Over is an alias for divide.
  }

return sum;

}
