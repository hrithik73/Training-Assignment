// Print this Pattern
// \*****/
// *\***/*
// **\*/**
// ***/***
// **/*\**
// */***\*
// /*****\

function printPattern(n) {
  let string = ""

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j)
        string += "\\"
      else if (i + j === n) {
        string += "/"
      }
      else
        string += "*"
    }
    string += "\n"
  }
  console.log(string)
}
printPattern(7)