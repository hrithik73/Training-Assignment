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
  ['.', '.', '.', 'b', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', 'k', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', 'h', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', 'r', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', 'q', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.']
]

function isSafeWithBishop(kingPosition, bishopPosition) {
  // Bishops runs diaonally so if the diagonal of the bishop cross with king's position then it will return false
  // console.log(kingPosition, bishopPosition)


  if (kingPosition[0] + kingPosition[1] === bishopPosition[0] + bishopPosition[1])
    return false

  if (kingPosition[0] - kingPosition[1] === bishopPosition[1] - bishopPosition[0])
    return false

  return true

}
function isSafeWithRook(kingPosition, rookPosition) {
  // 5,2 ->(5,0),(5,1),(5,2),(5,3),(5,4)
  // 5,2 ->(0,2),(1,2),(2,2),(3,2),(4,2)

  if (kingPosition[0] === rookPosition[0])
    return false
  if (kingPosition[1] === rookPosition[1])
    return false

  return true
}

function isSafeWithknight(kingPosition, knightPosition) {

  //Getting the position in row ,colum

  let row = knightPosition[0], column = knightPosition[1]
  let knightAttackingPositions = [
    [row + 2, column - 1],
    [row - 2, column + 1],
    [row + 2, column + 1],
    [row - 2, column - 1],
    [row + 1, column - 2],
    [row + 1, column + 2],
    [row - 1, column + 2],
    [row - 1, column - 2]
  ]
  // console.log(knightAttackingPositions[0][1])
  for (let i = 0; i < knightAttackingPositions.length; i++) {
    if (knightAttackingPositions[i][0] === kingPosition[0] && knightAttackingPositions[i][1] === kingPosition[1])
      return false
  }


}
function isSafeWithQueen(kingPosition, queeenPosition) {
  if (isSafeWithBishop(kingPosition, queeenPosition) && isSafeWithRook(kingPosition, queeenPosition))
    return true

  return false
}


function isKingSafe(chessBoard) {
  // console.log(chessBoard)
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


  if (!isSafeWithRook(kingPosition, rookPosition)) {
    return false
  }
  if (!isSafeWithBishop(kingPosition, bishopPosition))
    return false

  if (!isSafeWithknight(kingPosition, knightPosition))
    return false
  if (!isSafeWithQueen(kingPosition, queeenPosition))
    return false

  return true

  // console.log({ kingPosition })
  // console.log({ bishopPosition })
  // console.log({ rookPosition })
  // console.log({ queeenPosition })
  // console.log({ knightPosition })
}

let result = isKingSafe(chessBoard)
console.log({ result })