/* Write a method Boolean isValidSudoku(int[][]Sudoku)
->Returns true if the given Sudoku is correctly arranged otherwise false

->Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 i)   Each row must contain the digits 1-9 without repetition.
 ii)  Each column must contain the digits 1-9 without repetition.
 iii) Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Example:->

Input:board =
      [["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]


Output: true

Input: board =
       [["8", "3", ".", ".", "7", ".", ".", ".", "."]
      , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
      , [".", "9", "8", ".", ".", ".", ".", "6", "."]
      , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
      , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
      , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
      , [".", "6", ".", ".", ".", ".", "2", "8", "."]
      , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
      , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
Output: false

*/

let board = [["5", "3", ".", ".", "7", ".", ".", ".", "."]
  , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
  , [".", "9", "8", ".", ".", ".", ".", "6", "."]
  , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
  , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
  , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
  , [".", "6", ".", ".", ".", ".", "2", "8", "."]
  , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
  , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]


function isValidSudoku(board) {

  /*  -> Spliting the data from board to 3 part [i.e. We have to check the 3 conditions]
      -> As Working on the Large Data board it might be very clustered and complext to work so we can
      -> Split the Data into 3 Smaller chunks 
      -> It only contain the number as we don't have anyhting to do with the empty spaces
  */
  let row = [[], [], [], [], [], [], [], [], []]
  let column = [[], [], [], [], [], [], [], [], []]
  let subBoxes = [[], [], [], [], [], [], [], [], []]

  //Filling the row data
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {

      // Checking for Row
      if (board[i][j] !== ".") {
        //Check weather it already have encountered
        if (row[i].includes(board[i][j])) {
          return false
        }
        row[i].push(board[i][j])

      }
      // Checking for Column
      if (board[j][i] !== ".") {
        if (column[i].includes(board[j][i])) {
          return false
        }
        column[i].push(board[j][i])
      }

      //Checking for SubBoxes
      if (board[i][j] !== ".") {
        let subBoxIndex = Math.floor((i / 3)) * 3 + Math.floor(j / 3)
        // console.log(subBoxIndex)
        if (subBoxes.includes(board[i][j]))
          return false
        subBoxes[subBoxIndex].push(board[i][j])
      }


    }

  }
  console.log({ row })
  console.log({ column })
  console.log({ subBoxes })

  return true
  //Filling the Column Data
  // for (let i = 0; i < board.length; i++) {
  //   for (let j = 0; j < board.length; j++) {
  //     if (board[j][i] !== ".") {
  //       if (column[i].includes(board[j][i])) {
  //         return false
  //       }
  //       column[i].push(board[j][i])
  //     }
  //   }
  // }

  //Filling the Sub-Boxes
  // for (let i = 0; i < 9; i++) {
  //   for (let j = 0; j < 9; j++) {
  //     if (board[i][j] !== ".") {
  //       let subBoxIndex = Math.floor((i / 3)) * 3 + Math.floor(j / 3)
  //       // console.log(subBoxIndex)
  //       if (subBoxes.includes(board[i][j]))
  //         return false
  //       subBoxes[subBoxIndex].push(board[i][j])
  //     }
  //   }
  // }
}

console.log({ board })
let result = isValidSudoku(board)
console.log({ result })