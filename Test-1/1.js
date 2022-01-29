// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

let nums1 = [1, 3, 8, 10]
let nums2 = [5, 6, 7, 12, 15, 18]

//This function wroks same as Merge Sort's Merge Function which 
//will take two array then will merge them in sorted manner
function mergeArray(nums1, nums2) {
  let tempArray = []
  // Here we declare 3 pointer to traverse the nums1,nums2 and the merged array
  let i = 0, j = 0, k = 0
  while (i < nums1.length && j < nums2.length) {

    if (nums1[i] < nums2[j]) {
      tempArray[k] = nums1[i]
      i++
    }
    else {
      tempArray[k] = nums2[j]
      j++
    }
    k++
  }
  // Checking and copying the remaining elements in 1st array ie nums1
  while (i < nums1.length) {
    tempArray[k] = nums1[i]
    i++
    k++
  }
  // Checking and copying the remaining elements in 2nd array ie nums2
  while (j < nums2.length) {
    tempArray[k] = nums2[j]
    j++
    k++
  }
  return tempArray
}

function findMedian(nums1, nums2) {
  let mergedArray = mergeArray(nums1, nums2)
  console.log(mergedArray)
  let middleIndex = Math.floor(mergedArray.length / 2)

  if (mergedArray.length % 2 === 0) {
    // If the number of items is even then the median will be (N/2) and (N/2-1) 
    let median = Math.floor((mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2)
    return median
  }
  else {
    return mergedArray[middleIndex]
  }
}
let median = findMedian(nums1, nums2)
console.log({ median })