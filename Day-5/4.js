/*
Given an m x n 2D binary  grid which represents a map of '1's(land) and '0's(water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.You may assume all
four edges of the grid are all surrounded by water.

  Input: grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
  ]
Output: 1
Input: grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
]
Output: 3
*/

const checkAllDirection = (i, j) => {
  // Check Bounderies
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length) {
    return
  }
  // Already Visited
  if (grid[i][j] === '0') {
    return
  }

  // Else Mark Visited
  grid[i][j] = '0'

  // Check for all the directions
  checkAllDirection(i - 1, j)  // up
  checkAllDirection(i + 1, j) // down
  checkAllDirection(i, j - 1) // left
  checkAllDirection(i, j + 1) // right
}

const numberOfIsland = (grid) => {

  let count = 0
  for (let i = 0; i < grid.length; i++) {

    for (let j = 0; j < grid[i].length; j++) {

      if (grid[i][j] === '1') {
        console.log("Calling")
        checkAllDirection(i, j)
        count++
      }
    }
  }
  return count
}

let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
]
let result = numberOfIsland(grid)
console.log({ result })