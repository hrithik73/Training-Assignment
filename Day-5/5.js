/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees(clockwise).
You have to rotate the image in -place, which means you have to modify the input 2D matrix directly.
 DO NOT allocate another 2D matrix and do the rotation.


  Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
  Output: [[7,4,1],[8,5,2],[9,6,3]]
  
  Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
  Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

 */



function rotateMatrix(matrix) {
  /*
  Given a 2D matrix rotating it with 90 degree
  Steps involve
  Step 1:- To Transopes the matrix
  Step 2:- Reverse the row of the matrix
  */
  // Transposing  the matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }

  // reverse the row
  for (let i = 0; i < matrix.length; i++) {
    let start = 0, end = matrix[i].length - 1
    while (start < end) {
      let temp = matrix[i][start]
      matrix[i][start] = matrix[i][end]
      matrix[i][end] = temp
      start++
      end--
    }
  }
  console.log({ matrix })
}



let matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]
rotateMatrix(matrix)