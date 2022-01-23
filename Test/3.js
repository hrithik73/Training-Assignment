/*
Find all interleavings of given strings that can be formed from all the characters of the first and second string
where the order of characters is preserved.
*/


let string1 = "AB"
let string2 = "CD"

// The Task is to generate all the Possible combinations which contains string1 and string2
// The order is preseverd means the A Shoul always comes before B and C before D


function findInterleavings(string1, string2, interLeaving) {

  // Base cases for recursion
  if (string1.length === 0) {
    // console.log(string2)
  }
  if (string2.length === 0) {
    // console.log(string1)`
  }
  if (string1.length === 0 && string2.length === 0) {
    console.log(interLeaving)
  }

  // Picking charater from string 1 untill string1 is empty 
  if (string1.length !== 0) {
    findInterleavings(string1.substring(1), string2, interLeaving + string1[0])
  }
  // Same as above with string 2
  if (string2.length !== 0) {
    findInterleavings(string1, string2.substring(1), interLeaving + string2[0])
  }


}

let interLeavingArray = findInterleavings(string1, string2, "")
// console.log({ interLeavingArray })


