
//console.log(getProperNameBelow100(50));
console.log(problem17(1000));
function problem17 (n=10){
  /*

If the numbers 1 to 5 are written out in words: one, two, three, four, five,
then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words,
how many letters would be used?

NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two)
contains 23 letters and 115 (one hundred and fifteen) contains 20 letters.
The use of "and" when writing out numbers is in compliance with British usage.

*/

  let properName="";
  let count = 0;
  for (var i = 1; i <= n; i++) {
    properName = getProperNameBelow1000(i);
    count+= properName.length;
  }
  return count;
}


// Returns the proper name of the numbers between 0 and 99
function getProperNameBelow100(n) {
  let proper19 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
  'eighteen', 'nineteen'];

  let properTens = ['twenty', 'thrity', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (n < 20) {
    return proper19[n];
  }
  //Get the index for the tens proper name then add the proper name for the ones digit
  return properTens[Math.floor(n/10 - 2)] + proper19[n % 10];
}

// Returns the proper name of the numbers under one hundred thousand
function getProperNameBelow1000(n) {
  let proper19 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
  'eighteen', 'nineteen'];

  if (n < 100)
    return getProperNameBelow100(n);

  let strProperName = "";
  let thousands = Math.floor(n / 1000);
  let hundreds = Math.floor(n / 100) % 10;
  let subHundred = n % 100;

  if (n > 999)
    strProperName+= getProperNameBelow100(thousands) + "thousand";
  if (hundreds !== 0)
    strProperName+= proper19[hundreds] + "hundred";
  if (subHundred !== 0)
    strProperName+= "and" + getProperNameBelow100(subHundred);
  return strProperName;
}
