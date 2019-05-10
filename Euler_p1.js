console.log(problem1(1000));

function problem1(n1=1000){
/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

I've modified to problem so that it will find the multiples of 3 or 5 below any n1
Fascinating pattern of answers below
  n=10         answer: 23
  n=100        answer: 2318
  n=1000       answer: 233168
  n=10000      answer: 23331668
  n=100000     answer: 2333316668
  n=1000000    answer: 233333166668
  n=10000000   answer: 23333331666668
  n=100000000  answer: 2333333316666668
  n=1000000000 answer: 233333333166666700

  function returns sum of the multiples
*/

  //problem states below n1
  n= n1-1;

  //The trick to problem is to realize that (3+6+9+12+....)  = 3*(1+2+3+4+...x1)

  //How many times will 3 go into n1?  This finds the number of terms that need to be summed
  //i.e. n1 = 10 then 10/3  = 3 times
  x1=Math.floor(n/3);

  //Find the sum of all the integers x1 and below
  //i.e. if x1=3  then the sum of all integers x1 and below is 3+2+1 = 6
  y1=(x1*(x1+1))/2

  //Now that we have the sum multiply by 3
  sum_3=3*y1;

  //How many times will 5 go into n1?  This finds the number of terms that need to be summed
  //i.e. n1 = 10 then 10/5  = 2 times
  x2=Math.floor(n/5);

  //Find the sum of all the integers x2 and below
  //i.e. if x2=3  then the sum of all integers x1 and below is 3+2+1 = 6
  y2=(x2*(x2+1))/2

  //Now that we have the sum multiply by 5
  sum_5=5*y2;

  //How many times will 15 go into n1?  This finds the number of terms that need to be summed
  //i.e. n1 = 45 then 45/15  = 3 times
  x3=Math.floor(n/15);

  //Find the sum of all the integers x2 and below
  //i.e. if x3=3  then the sum of all integers x1 and below is 3+2+1 = 6
  y3=(x3*(x3+1))/2

  //Now that we have the sum multiply by 15
  sum_15=15*y3;

  return(sum_3 + sum_5 - sum_15);
}
