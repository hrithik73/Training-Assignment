// :->Question 1
// :->Write a program to remove duplicate values from an array and returns an array of unique values.
// int[] removeDuplicates(int[]values)


let initialArray = [1, 2, 2, 3, 4, 4]

function removeDuplicates(initialArray) {

  //When testing one methode always comment out others :)

  // Method 1: Using Sort and constant extra space
  // initialArray.sort()
  // let uniqueArray = []

  // for (let i = 0; i < initialArray.length; i++) {
  //   if (initialArray[i] !== initialArray[i + 1])
  //     uniqueArray.push(initialArray[i])
  // }
  // console.log({ uniqueArray })


  //Method 2: Using Sort and without extra spaces

  let j = 0
  for (let i = 0; i < initialArray.length; i++) {
    if (initialArray[i] !== initialArray[i + 1])
      initialArray[j++] = initialArray[i]
  }
  console.log({ initialArray })
  for (let k = 0; k < j; k++)
    console.log(initialArray[k])


  // Methode 3: Using the Set
  // Set is a data type which only contain unique value

  let uniqueArray = [...new Set(initialArray)]
  console.log({ uniqueArray })

}

console.log({ initialArray })
removeDuplicates(initialArray)