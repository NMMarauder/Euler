console.log(problem7(10001));

function problem7(n=6){
/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the
6th prime is 13.

What is the 10 001st prime number?

Solution: Use sieve of Eratosthenes to generate prime numbers up to the nth prime number.

Use the asymptotic law of distribution of prime numbers to determine the upperLimit of our
sieve loop.   The asymptotic law states that:

The first x numbers contain x/log (x)  prime numbers.

*/

//Determine upper limit of our sieve loop
var searching = true;
var x =1;
while (searching){
  x*=10;
  var numPrimes = x/Math.log(x);
  if (numPrimes > n) { searching = false;}
}
upperLimit = Math.floor(x);


//Initialize variables
var array = [];
var primes = [];
var factor=[];

//Make an array of all true elements from 0 to upperLimit
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

//array is zero indexed so remove 1 from count.
return("The " + n + "th prime is " + primes[n-1]);

}
