console.log(problem10(n=2000000));

function problem10(){
  /*
  The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
  Find the sum of all the primes below two million.
*/
  array =[];

  //Make an array from 2 to (upperLimit)
  for (var i = 0; i <= n; i++) {
      array.push(true);
  }

//Remove multiples of primes starting from 2, 3, 5,...
for (var i = 2; i <= n; i++) {
    if (array[i]) {
      for (var j = i * i; j <= n; j += i) {
        array[j] = false;
      }
    }
}

//All array[i] items set to true are primes
count=0;
let sum=0;
for (var i = 2; i <= n; i++) {
    if(array[i]) {
      sum += i;
      //primes.push(i);
      count++;
    }
}
return (sum);

}
