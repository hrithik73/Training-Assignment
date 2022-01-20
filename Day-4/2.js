/*

Given a string s, find the length of the longest substring without repeating characters.
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
s consists of English letters, digits, symbols and spaces.
*/

function checkDuplicates(str, start, end) {

  let occured = new Array(26)
  for (i = start; i < end; i++) {
    if (occured[str[i]] === true) {
      return false
    }
    occured[str[i]] = true
  }
  return true
}


function longestUniqueSubsttr(str) {
  let count = 0
  //Sliding Window Approach
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      if (checkDuplicates(str, i, j)) {
        let currentLength = j - i + 1
        if (currentLength > count) {
          count = currentLength
        }
      }
    }
  }
  return count

}

const result = longestUniqueSubsttr("abcabcbb")
console.log({ result })