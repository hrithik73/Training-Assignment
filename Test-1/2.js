/*
You are given an array of integers nums, there is a sliding window of size k which is moving from 
the very left of the array to the very right. You can only see the k numbers in the window. 
Each time the sliding window moves right by one position.
Return the max sliding window
*/

// This Function find the max in the range from start to end in nums
function findMax(nums, start, end) {
  let max = 0
  for (let j = start; j <= end && j < nums.length; j++) {
    if (nums[j] > max)
      max = nums[j]
  }
  return max
}

function findMaxInSlidingWindow(nums, k) {

  //Check the base condition if the given number array is empty or k is 0 will return empty array
  if (nums.length === 0 || k === 0)
    return []


  // Firstly Traverse the nums and find the max in the window
  let maxSlidingWindow = []

  let start = 0
  for (let i = 0; i < nums.length; i++) {

    // Checks for the condition if it is in the range
    // (end(i)- start )+1 is equal k then only find the max and append it to the result
    if ((i - start) + 1 === k) {
      let max = findMax(nums, start, i)
      maxSlidingWindow.push(max)
      start++
      // Slid the window with increment in start
    }

  }
  return maxSlidingWindow
}


let nums = [1, 3, 4, 5, 2, 7], k = 3
// So here the answer will 
// [1,3,4] ->4
// [3,4,5] ->5
// [4,5,2] ->5
// [5,2,7] ->7
// result :-[4,5,5,7]
let maxWindow = findMaxInSlidingWindow(nums, k)
console.log({ maxWindow })