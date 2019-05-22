
console.log(problem4(6));

function problem4(n=3){

    /*
    A palindromic number reads the same both ways. The largest palindrome made from the product of two
    2-digit numbers is 9009 = 91 × 99. Find the largest palindrome made from the product of two 3-digit numbers.

    I've modified the problem so that it will find the largest palindrome for any two n-digit numbers

    There are two ways I see to solve the problem.
    1. Generate products and check to see if it is a Palindrome
    2. Generate palindromes and check to see if it is the product of two n-digit numbers
    I've chosen method 1.

    Function returns an array with the two numbers and the palindrome.
    */

    var currMax = 0;
    for (num1=Math.pow(10, n) -1; num1>1; num1--){
      for (num2= Math.pow(10, n) -1; num2>1; num2--){

        //getMaxPalindrome returns max palindrome that is greater than current max
        var max = getMaxPalindrome(num1,num2,currMax);
        //record numbers and palindrome if it is the new champion
        if (max > currMax){
          max1=num1;
          currMax = max;
          max2= (currMax/num1);
          break;
        }
        //if the product of the two numbers is less than the current max go back to outer loop
        if (num1*num2 < currMax){break;}
      }
      // when num1 is as small as max2 we are done searching
      if (num1==max2){break;}
    }
    var result = [];
    result.push(max1,max2,currMax);
    return(result);
}

function getMaxPalindrome(num1,num2, currMax){
  // Holding num1 constant loop from num2 to 2 and find the first (and largest) palindrome.
  // if product of num1*num2 < currMax no need to keep searching
  for (num2; num2>1; num2--){
    product=num1*num2;
    if (product < currMax){break;}
    strNum = product.toString();
    if (isPalindrome(strNum)){break;}
  }
  return(product);
}

function isPalindrome(strNum){

  numLength = strNum.length;
  if (numLength > 1 ){
      //Get first and last characters of string
      var leftChar=strNum.substring(0,1);
      var rightChar = strNum.substring(numLength-1);

      //If they match - pull them off the string and send it through the function again
    if (leftChar == rightChar) {
      var newNum = strNum.substring(1,numLength-1);
      return (isPalindrome(newNum));
    }else{
      // The first and last don't match it's not a palindrome
      return false;
    }
  } else{
    //if we are down to a single character - we have a palindrome
    return true;
  }
}


//thought I was going to need to sort an array but I didn't
function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}
