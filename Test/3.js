/*
Find all interleavings of given strings
that can be formed from all the characters of the first and second string where the order of characters is preserved.
*/


let string1 = "ABC"
let string2 = "DEF"


function findInterleavings(string1, string2) {

  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < string2.length; j++) {
      console.log(string1[i] + string2[j])
    }
  }
}

let interLeavingArray = findInterleavings(string1, string2)


