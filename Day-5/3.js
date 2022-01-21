/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous 2row.
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j],target <= 104
*/

/** 
*@param {Array[Array]} matrix
*@param {intger} target to search in Matrix
*@returns {Boolean} Return true if the matrix contains the target
**/


function binarySearch(array, target) {
  let start = 0, end = array.length
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (array[mid] === target) {
      return true
    }
    else if (target < array[mid]) {
      end = mid - 1
    }
    else {
      start = mid + 1
    }
  }

}

function searchInMatrix(matrix, target) {
  //Naive approach will be to check last element of every row and if the target is less than the last element 
  // Apply Binary Search on the current array

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][matrix.length - 1] > target) {
      if (binarySearch(matrix[i], target)) {
        return true
      }
    }
  }
  return false
  // Another Approach would be to apply binary search on the matrix and then apply binary search again
}
let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 20

const result = searchInMatrix(matrix, target)
console.log({ result })