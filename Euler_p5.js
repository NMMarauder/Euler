console.log(problem5(n=20));

function problem5(n=10){
/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

I can't think of any trick that makes this easier.  Just brute force check.

*/

//Strirling's approximation for a factorial is n! = n^n * e^-n * sqrt(2*pi*n)
var upperLimit = Math.floor(Math.pow(n,n) * Math.pow(Math.E,-n) * Math.pow(2*Math.PI*n,0.5));

//loop thru numbers between n*n and upperlimit by steps of n
for (var i = n*n; i<upperLimit; i+=n){
  if (allEvenFactors(i,n)) {break;}
}
var x = "The smallest number evenly divisible by all numbers between 1 and "+n+ " is "+i;
return(x);

}

function allEvenFactors(i,n){
  //recursive function it n is an even factor it reduces it by one and checks again.
  if (i%n ==0 ){
    n--;
    if (n < 2) { return true;}
    if (allEvenFactors(i,n)) {return true;}else{return false;}
  }else{
    return false;
  }
}
