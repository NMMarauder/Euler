console.log(problem18());

function problem18(){
/*
Problem:
By starting at the top of the triangle below and moving to adjacent numbers on the row below,
the maximum total from top to bottom is 23.

   3
  7 4
 2 4 6
8 5 9 3

That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom of the triangle below:

              75
             95 64
            17 47 82
           18 35 87 10
          20 04 82 47 65
         19 01 23 75 03 34
        88 02 77 73 07 63 67
       99 65 04 28 06 16 70 92
      41 41 26 56 83 40 80 70 33
     41 48 72 33 47 32 37 16 94 29
    53 71 44 65 25 43 91 52 97 51 14
   70 11 33 28 77 73 17 78 39 68 17 57
  91 71 52 38 17 14 91 43 58 50 27 29 48
 63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

NOTE: As there are only 16384 routes, it is possible to solve this problem by trying
every route. However, Problem 67, is the same challenge with a triangle containing
one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)

Solution thought process:

Look at the example triangle
   3
  7 4
 2 4 6
8 5 9 3

1.) Start with the last row-1 . You have line 2 4 6.

2.) calculate the best step from each number in that row as follows:
From 2, you can go to either 8 or 5, 8 is the maximum because 2+8 =10 while 2+5 = 7.
From 4, you can go to either 5 or 9, 9 is the max because 4+9 = 13 while 4+5=9.
From 6, you can go to either 9 or 3, 9 is the max because 6+9 = 15 while 6+3=9.
This end of first iteration gives line of sums 10 13 15.

Now we have a smaller triangle.

    3
  7  4
10 13 15

return to step one and repeat until you end up with a single value (23 in this case)

*/

/*
//Test Triangle
var triangle =[[3],
              [7, 4],
              [2, 4, 6],
              [8, 5, 9, 3]];
*/
  var triangle =[[75],
                [95, 64],
                [17,47,82],
                [18,35,87,10],
                [20,04,82,47,65],
                [19,01,23,75,03,34],
                [88,02,77,73,07,63,67],
                [99,65,04,28,06,16,70,92],
                [41,41,26,56,83,40,80,70,33],
                [41,48,72,33,47,32,37,16,94,29],
                [53,71,44,65,25,43,91,52,97,51,14],
                [70,11,33,28,77,73,17,78,39,68,17,57],
                [91,71,52,38,17,14,91,43,58,50,27,29,48],
                [63,66,04,68,89,53,67,30,73,16,69,87,40,31],
                [04,62,98,27,23,09,70,98,73,93,38,53,60,04,23]];


  let i=triangle.length -2;
  while (i>= 0){

    let row = triangle[i];
    let newRow=[];

    for (let j=0; j< row.length; j++){
      let sumLeft = row[j] + triangle[i+1][j];
      let sumRight = row[j] + triangle[i+1][j+1];
      if (sumLeft > sumRight){
          newRow.push (sumLeft);
      }else{
          newRow.push (sumRight);
      }
    }
    //take last two rows off and replace with the newRow of calculated values
    triangle.pop();
    triangle.pop();
    triangle.push(newRow);
    i=triangle.length -2;
  }

  return Number(triangle[0]);



}
