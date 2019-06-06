

function problem21(n = 10000) {
  /*
Let d(n) be defined as the sum of proper divisors of n
(numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and
each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110;
therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.

*/

  const divisors = [];
  const pairs = [];

  for (let i = 4; i < n; i += 1) {
    // find divisors of i and push them into an array
    // i.e.  220 has divisors of 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110
    divisors1 = [];
    for (let j = 1; j < i; j++) {
      if (i % j == 0) {
        upperNum = i / j;
        if (j != 1) { divisors1.push(j, upperNum); } else { divisors1.push(j); }
      }
      if (j >= upperNum) {
        divisors1.pop();
        divisors1.pop();
        break;
      }
    }

    // Sum the divisors found
    // i.e. 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110 sums to 284
    let sum = 0;
    for (j = 0; j < divisors1.length; j++) {
      sum += divisors1[j];
    }

    // Find the divisors of the sum
    // i.e. find the divisors of 284 which are 1, 2, 4, 71 and 142
    divisors2 = [];
    for (let j = 1; j < sum; j++) {
      if (sum % j == 0) {
        upperNum = sum / j;
        if (j != 1) { divisors2.push(j, upperNum); } else { divisors2.push(j); }
      }
      if (j >= upperNum) {
        divisors2.pop();
        divisors2.pop();
        break;
      }
    }

    // Sum divisors 1, 2, 4, 71 and 142 which is 220
    let sum2 = 0;
    for (j = 0; j < divisors2.length; j++) {
      sum2 += divisors2[j];
    }

    // check to see if this pair of numbers is amicable
    if (sum2 == i && i != sum) {
      if (pairs.indexOf(sum) < 0) { pairs.push(i, sum); } // Don't add the pair if it's already in there
    }
  }
  // Sum the amicable pairs that we found
  let sum = 0;
  for (j = 0; j < pairs.length; j++) {
    sum += pairs[j];
  }

  return sum;
}
console.log(problem21());
