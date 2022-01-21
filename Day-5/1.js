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
  let clockWise = []
  let antiClockWise = []
  // For clockwise
  for (let i = 0; i < initialArray.length; i++) {

    clockWise.push(initialArray[i])

  }
  console.log({ clockWise })
}

let initialArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
printArray(initialArray)