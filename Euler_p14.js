console.log(problem14());
function problem14(){
/*

The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
Although it has not been proved yet (Collatz Problem), it is thought that all starting
numbers finish at 1.

Which starting number, under one million, produces the longest chain?
NOTE: Once the chain starts the terms are allowed to go above one million.

*/

let max=1;
let startingNum = 1;

for (i=2; i<1000000; i++){

  let term=i;
  termCount=1;

  while (term !=1){
    if (term%2 == 0) {
      term = term/2;
    }else{
      term = 3*term + 1;
    }
    termCount++;
  }
  if(termCount > max){
    max=termCount;
    startingNum=i;
  }
}

let result=[];
result.push (startingNum, termCount);

return result;

}
