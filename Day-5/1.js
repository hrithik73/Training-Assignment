/*
1. Write a method void printArray(int[][]arr)
Prints array elements clock wise and anti - clockwise alternatively.
Input :
1 2 3
4 5 6
7 8 9
Output:
1 2 3 6 9 8 7 4 5
3 2 1 4 7 8 9 6 5

*/

function printArray(initialArray) {
  // Print Clockwise  
  let left = 0, right = initialArray.length, top = 0, bottom = initialArray.length
  let dir = 0
  while (left < right)
    console.log({ left, right, top, bottom })

}

let initialArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
printArray(initialArray)