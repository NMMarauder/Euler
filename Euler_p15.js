
console.log (problem15(20));


function problem15(n=2){

/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and
down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?

Solution thought process:
With only 1 cell there are 2 ways to go from top left to bottom right.

|2|  <-This is a cell.  The number inside represents how many paths

Note with a grid that with just 2 cells |2|3| there are 3 ways to go from top left
to bottom right.  It doesn't matter if the 2 cells are verticle there are still only 3 ways.
Thus a 3 in the bottom (or far right) cell.

|2|
|3|

with 4 cells there are 6 ways to go from top left to bottom right. Thus the number 6 in the
bottom right cell.

|2|3|
|3|6|

with 9 cells there are 20 ways to go from top left to bottom right. Thus the 20 in the
bottom right cell.

|2 | 3|  4|
|3 | 6| 10|
|4 |10| 20|

At this point you can see a pattern.  Pascal's triangle starts to show up.  Let's take the middle
cell in the 9 cells above.  It's value is calculated by adding the cell above it to the cell
to the left of it.  3 + 3 = 6.   Go to the bottom right cell.  Same thing 10 + 10 = 20.

So the plan is to initalize the first column and row then use the formula to calcuate then
rest of the cells.


*/

  array=matrix(n,n,0); //Create 2d array n x n - all elements set to zero

  //Initialize first row and column
  for (i=0; i<n; i++){
    array[0][i] = i+2;  //row
    array[i][0] = i+2;  //column
  }

  //Loop through rows calculating values
  for (i=1; i<n; i++){
    for (j=1; j<n; j++){
      array[i][j]= array[i][j-1] + array[i-1][j];
    }
  }

  return (array[n-1][n-1]);
}


function matrix( rows, cols, defaultValue){

  var arr = [];

  // Creates all lines:
  for(var i=0; i < rows; i++){
      arr.push([]); // Creates an empty line
      arr[i].push( new Array(cols)); // Adds cols to the empty line:

      for(var j=0; j < cols; j++){
        arr[i][j] = defaultValue;   // Initializes:
      }
  }

return arr;
}
