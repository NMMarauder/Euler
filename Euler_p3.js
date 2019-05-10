console.log(problem3(600851475143));
//console.log(problem3(6857));

function problem3(n=13195){
  /*
  The prime factors of 13195 are 5, 7, 13 and 29.
  What is the largest prime factor of the number 600851475143 ?

  i've modified the problem so that it will find the prime factors of any n

  Solution is 2 parts:
  1.) Use sieve of Eratosthenes to generate prime numbers up to sqrt(n)
  2.) Loop through array of primes in reverse looking for first prime factor.

  function returns a string

  */

  //Initialize variables
  var array = [];
  upperLimit = Math.floor(Math.sqrt(n));
  var primes = [];
  var factor=[];

  //Make an array from 2 to (upperLimit)
  for (var i = 0; i <= upperLimit; i++) {
      array.push(true);
  }

  //Remove multiples of primes starting from 2, 3, 5,...
  for (var i = 2; i <= upperLimit; i++) {
      if (array[i]) {
        for (var j = i * i; j <= upperLimit; j += i) {
          array[j] = false;
        }
      }
  }

  //All array[i] items set to true are primes
  count=0;
  for (var i = 2; i <= upperLimit; i++) {
      if(array[i]) {
        primes.push(i);
        count++;
      }
  }

  // Search array in reverse for prime factors of n
  for (var i = primes.length; i >= 0; i--) {
      if( n%primes[i]==0) {
        factor.push(primes[i]);
      }
  }
  //if the number is a prime fix its factors
  if (!(factor[0] > 1)) {factor.push(1);}

  var msg = "The largest prime factor of "+n + " is "+ factor[0] + " factors are: "+factor;
  return msg;
}
