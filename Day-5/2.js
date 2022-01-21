/*2. Write a program to print all the possible combinations according to the input values.
Example :
Given Values
'1' : ['Z', 'Y', 'A'],
'2' : ['B', 'O'],
'12' : ['L']
'3' : ['U', 'P']

Input : 123
Output : [ZBU, ZBP, ZOU, ZOP, YBU, YBP, YOU, YOP, ABU, ABP, AOU, AOP, LU, LP]

*/

const getLettersForNum = function (number) {
  switch (number) {
    case "1": return ['Z', 'Y', 'A']
    case "2": return ['B', 'O']
    case "3": return ['U', 'P']
    case "12": return ['L']
    default: return ['']
  }
}

const getPermutations = function (permutations, letters) {
  let result = []

  // forEach takes gives a callback function for every element present in the array
  letters.forEach(l => {
    permutations.forEach(p => {
      result.push(p + l)
    })
  })
  // console.log(result)
  return result
}

var printAllCombinations = function (digits) {
  let result = [""]

  for (let i = 0; i < digits.length; i++) {
    result = getPermutations(result, getLettersForNum(digits[i]))
  }

  console.log({ result })
}

printAllCombinations('123')

