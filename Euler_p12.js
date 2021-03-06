console.log(problem12(500));

function problem12(n=7){
/*
The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

Let us list the factors of the first seven triangle numbers:

     1: 1
     3: 1,3
     6: 1,2,3,6
    10: 1,2,5,10
    15: 1,3,5,15
    21: 1,3,7,21
    28: 1,2,4,7,14,28

We can see that 28 is the first triangle number to have over five divisors.
What is the value of the first triangle number to have over five hundred divisors?

*/
var start = Date.now();
let finished = false;
let i=3;
let divisorCount=0;
let triangle =0;


while (divisorCount <=n) {
  triangle =(i*(i+1))/2;

    /*Each division with no remainder results in 2 pairs of numbers.
    when the loop counter reaches the upper pair (e.g. 7) of the last pair found,
    then we are done.  Subtract one from the counter and mulitiply by 2 to get the total
    number of factors.
    * 1 | 2 | 4 | <-lower # of pair   upper # of pair ->  | 7 | 14 | 28 **/

   let upperNum =0;
   divisorCount=0;

   for (j=1;j< triangle; j++){
     if (triangle%j==0){
       upperNum=triangle/j;
       divisorCount++;
     }
     if ( j >= upperNum ){
       divisorCount--;
       divisorCount=divisorCount*2;
       break;
     }
   }

  i++;

  }
  var millis = Date.now() - start;
  console.log("seconds elapsed = " + (millis/1000));
  return (triangle)
}
