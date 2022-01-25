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
  // We take the all 4 direction and traverse
  let left = 0, right = initialArray.length, top = 0, bottom = initialArray.length

  while (left < right && top < bottom) {

    for (i = top; i < bottom; i++) {
      console.log(initialArray[left][i])
    }
    left++

    for (i = left; i < right; i++) {
      console.log(initialArray[i][bottom - 1])

    }
    bottom--

    if (left < right) {
      for (i = bottom - 1; i >= 0; --i) {
        console.log(initialArray[right - 1][i])
      }
      right--
    }
    if (top < bottom) {
      for (i = right - 1; i >= left; i--) {
        console.log(initialArray[i][top])
      }
      top++;
    }

  }
}

let initialArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
console.log({ initialArray })
printArray(initialArray)