/*
Write a method Boolean isKingSafe(int[][]chessBoard)
- Returns true if king in the given chess board is safe from the given enemies otherwise false;
- NOTE: Enemies are - Horse, Camel, Queen, Elephant only
  Do not consider the colour case of the chess board for traversal of camel and all.
*/

/*
  Acronyms:-
  k:-King
  b:-Bishop [Camel]
  h:-Knight [Horse]
  q:-Queeen
  r:-Rooks  [Elepehent]
*/

// Globle Variable 'chessBoard' contains the Data(position of all the peices on the board)4
let chessBoard = [
  ['-', '-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', 'b', '-', '-', '-', '-', '-'],
  ['-', '-', '-', 'k', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', 'h', '-', '-'],
  ['-', '-', '-', 'q', '-', '-', '-', '-'],
  ['-', 'r', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-', '-']
]

function isSafeWithBishop(kingPosition, bishopPosition) {
  // Bishops runs diaonally so if the diagonal of the bishop cross with king's position then it will return false
  console.log(kingPosition, bishopPosition)
  // for(let i=0;i)

}
function isSafeWithRook() {

}
function isSafeWithQueen() {

}
function isSafeWithknight() {

}


function isKingSafe(chessBoard) {
  console.log(chessBoard)
  // let kingPosition, bishopPosition, knightPosition, queeenPosition, rookPosition
  let kingPosition = []
  let bishopPosition = []
  let knightPosition = []
  let queeenPosition = []
  let rookPosition = []


  // Get the positions of all the pieces 
  for (let i = 0; i < chessBoard.length; i++) {
    for (let j = 0; j < chessBoard.length; j++) {
      if (chessBoard[i][j] === 'k') {
        // console.log({ i, j })
        kingPosition.push(i)
        kingPosition.push(j)
      }
      if (chessBoard[i][j] === 'b') {
        // console.log({ i, j })

        bishopPosition.push(i)
        bishopPosition.push(j)
      }
      if (chessBoard[i][j] === 'h') {
        // console.log({ i, j })

        knightPosition.push(i)
        knightPosition.push(j)
      }
      if (chessBoard[i][j] === 'q') {
        // console.log({ i, j })

        queeenPosition.push(i)
        queeenPosition.push(j)
      }
      if (chessBoard[i][j] === 'r') {
        // console.log({ i, j })

        rookPosition.push(i)
        rookPosition.push(j)
      }

    }
  }

  isSafeWithBishop(kingPosition, bishopPosition)



  // console.log({ kingPosition })
  // console.log({ bishopPosition })
  // console.log({ rookPosition })
  // console.log({ queeenPosition })
  // console.log({ knightPosition })
}

let result = isKingSafe(chessBoard)
console.log(result)