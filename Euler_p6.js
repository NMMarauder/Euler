console.log(problem5(100));

function problem5(n=100){
  /*
  The sum of the squares of the first ten natural numbers is,
  1^2 + 2^2 + ... + 10^2 = 385

  The square of the sum of the first ten natural numbers is,
  (1 + 2 + ... + 10)^2 = 55^2 = 3025

  Hence the difference between the sum of the squares of the first ten natural numbers and
  the square of the sum is 3025 − 385 = 2640.
  Find the difference between the sum of the squares of the first one hundred natural
  numbers and the square of the sum.
  */

  //There is probably some clever trick to do this like there is for the next part
  var sumSquares = 0;
  for(i=1;i<=n;i++){
    sumSquares+= Math.pow(i,2);
  }

  //Clever trick to find sum of all integers below n
  var squaresSum =Math.pow((n*(n+1))/2,2);

  var difference = squaresSum - sumSquares;
  return(difference);

}
