/*Write down a method boolean isNameValid(String name).
A name is valid if following conditions are satisfied:
• It does not contain any vowel more than once.
• If the name contains two ‘S’, then there is not any ‘T’ in between them (both in capital cases).
*/

function isValidName(name) {
  console.log(name)

  const vowels = new Map([
    ['a', 0],
    ['e', 0],
    ['i', 0],
    ['o', 0],
    ['u', 0]
  ])
  //Count the numbe vowels 
  for (let i = 0; i < name.length; i++) {
    if (vowels.has(name[i])) {
      vowels.set(name[i], vowels.get(name[i]) + 1)
    }
  }

  //check if any vowel occure more than once
  vowels.forEach(function (value, key) {
    if (value > 1) {
      // console.log(value)
      return false
    }
  })

  console.log(vowels)
  // Check for the Latter between S<-->S
  // check weather the string contains the S

  if (name.includes('s')) {
    //split the array with S
    let trimmedArray = name.split('s')
    for (let i = 0; i < trimmedArray.length; i++) {
      if (trimmedArray[i].includes('t'))
        // console.log("Hello")
        return false
    }
  }
  return true

}

let isNameVal = isValidName("hrthik")
console.log({ isNameVal })