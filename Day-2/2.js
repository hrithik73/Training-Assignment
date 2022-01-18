// Question 2:-
// Write a function that takes in a non - empty array of distinct integers and an integer representing a target sum.
// The function should find all triplets in the array that sum up to the target sum and return a two - dimensional array of all these triplets.
// The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with 
// respect to the numbers they hold.If no three numbers sum up to the target sum, the function should return an empty array

let initialArray = [1, 4, 5, 6, 3, 8, 20, 1, 2], target = 10

function generateTriplet(initialArray, target) {
  //Naive Approach
  let resultArray = [[], []]

  initialArray.sort()
  console.log(initialArray)
  // Fixing the first and second element and finding 3rd element 
  for (let i = 0; i < initialArray.length; i++) {
    let left = i + 1, right = initialArray.length - 1
    while (left < right) {
      if (initialArray[i] + initialArray[left] + initialArray[right] === target) {
        console.log(initialArray[i], initialArray[left], initialArray[right])
      }
      if (initialArray[i] + initialArray[left] + initialArray[right] < target) {
        left++
      }
      else
        right--
    }
  }
}

generateTriplet(initialArray, target)