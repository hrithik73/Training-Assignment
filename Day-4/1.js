/*
Question 1:-
Make a StringUtils class which contains following methods
NOTE: You can use only String.charAt(), methods to code this problem.(Don't use any other inbuilt functions)
static int countChar(String str,char ch)
-> Returns occurrence of the given character in the given String (str).

static String substring(String str,int start,int end)
-> Returns a substring from the start index to end index with all validation checks.

static String[] split(String str,char ch)
-> Returns an array of strings broken according to the occurrence of the given character with validation checks.

static Boolean hasPattern(String str,String pattern)
-> Returns true if the give string (pattern) found in the main string (str) otherwise false.

static Boolean allWordsContainsChar(String str,char ch)
-> Returns true if all words of the given string (str) contains the given character (ch)  otherwise false.

static String reverse(String str)
-> Returns the reverse of the String (Without using extra String or array)

static String reverseVowels(String str)
- Reverse only all the vowels in the string and return it ( Example : 
Input: s = "liipcoce"
Output: "leopcici"
Input: s = "hello"
Output: "holle"
)
*/

/*
* Class StringUtils which contains all the methods
*/
class StringUtils {

  constructor() {
    console.log("This is Constructor")
  }


  /**
 * Returns the Character count of the given character
 *
 * @param {string} string The String to find the character
 * @param {character } char The charactor to find in the string
 * @return {number} Number of Counts
 */
  countChar(string, char) {
    let count = 0
    for (let i = 0; i < string.length; i++) {
      if (string[i] === char)
        count++
    }
    return count
  }


  /**
 * Returns the SubString of from start to end index
 *
 * @param {string} string The String to find the character
 * @param {start } starting index of substring
 * @param {end} Ending index of substring
 * @return {subString} SubString with the index
 */
  subString(string, start, end) {
    let subString = ""
    for (let i = start; i <= end; i++) {
      subString += string[i]
    }
    return subString
  }



  /**
 * Returns the Array of Splited substring from a perticular char
 *
 * @param {string} string The String to find the character
 * @param {char } char to Split from there
 * @return {Array[String]} Array containing all the splited subStrings
 */

  split(string, char) {
    let resultArray = []
    let i = 0
    while (i < string.length) {
      /* 
      Traverse the String and find index of the character and push all the charater till the "char" to an tempString and 
      check if the tempString is empty
      If it not empty push it to the Result
      */
      let currentEnd = string.indexOf(char)
      let tempString = ""

      //Getting the SubString
      for (let i = 0; i < currentEnd; i++) {
        tempString += string[i]
      }
      // Checking and Pushing it to the result
      if (tempString !== "")
        resultArray.push(tempString)

      // console.log(string.substring(0, currentEnd))
      /*  
      Now in JS indexOf() operator only gives the location of the 1st occcurance so deleting all the charater till we find the char
      */
      let tempStringForOGString = ""
      for (let i = currentEnd + 1; i < string.length; i++) {
        tempStringForOGString += string[i]
      }
      string = tempStringForOGString

      // console.log({ currentEnd })
      // console.log({ string })
      if (currentEnd === -1) {
        resultArray.push(string)
        break
      }
    }
    return resultArray

  }

  /**
 * 
 * Given a String chech weather the given pattern(Sub String) exist or not
 * @param {string} string The String to find the character
 * @param {string } subString to check
 * @return {Boolean} Boolean Variable containing weather the 
 */

  hasPattern(str, pattern) {
    for (let i = 0; i <= str.length - pattern.length; i++) {
      let j, flag = 0
      for (j = 0; j < pattern.length; j++) {
        if (str[i + j] !== pattern[j]) {
          flag = 1
          break
        }
      }

      if (flag === 0)
        return true
    }
    return false
  }

  /**
 *  Returns True only if all the words of the String contains the charater 
 * 
 * @param {string} string The String to find the character
 * @param {char } character to check
 * @return {Boolean} return true or false depending upoun the condition weather all the words have the char or not
 */

  allWordsContainsChar(str, ch) {
    let wordsArray = this.split(str, ' ')

    for (let i = 0; i < wordsArray.length; i++) {
      if (wordsArray[i].indexOf(ch) !== -1) {
        return true
      }
      return false
    }
  }

  /**
*  Returns Reversed String without using extra string or array
* @param {String} string The String to Reverese 
* @return {String} Reversed string
*/
  reverseString(string) {


    /* Since string is not mutable in JS unlike C/CPP so we can't reverse it without another
     String or Librbay Function

    This logic Shoul Perfectly work on C/CPP

    let left = 0, right = string.length-1
    while (left < right) {
      let temp = string[left]
      string[left] = string[right]
      string[right] = temp
      left++
      right--
    }


    Here is Tested CPP Code :-
      #include <iostream>
      using namespace std;
      int main() {
          string str="Hrithik";
          int left = 0, right = str.length()-1;
          while (left <=right) {
            int temp = str[left];
            str[left] = str[right];
            str[right] = temp;
            left++;
            right--;
          }
          std::cout << str << endl;
          return 0;
      }
      Expected Output:- kihtirH
     */

    return string
  }

  /**
*  check weather the character is vowel or not
* @param {character}  character to check the if it vowel or not? 
* @return {Boolean} return True or False 
*/
  isVowel(char) {
    return char === 'a' || char === 'A' || char === 'e' || char === 'E' || char === 'i' || char === 'I' || char === 'o' || char === 'O' || char === 'u' || char === 'U'
  }

  /**
*  Returns  String with vowel reversed
* @param {String} string The String to Reverese it's all the vowel
* @return {String} Returns the String with reversed vowel
*/
  reverseVowel(string) {
    let vowels = [], result = []

    for (let i = 0; i < string.length; i++) {
      if (this.isVowel(string[i])) {
        vowels.push(string[i])
      }
    }

    for (let j = 0; j < string.length; j++) {
      if (this.isVowel(string[j])) {
        result.push(vowels.pop())
      }
      else {
        result.push(string[j])
      }
    }

    console.log({ string })
    return result.join('')
  }


}

// Instantiating the classs
let stringUtilsInstance = new StringUtils()

let count = stringUtilsInstance.countChar("Hello", 'l')
console.log({ count })

let subString = stringUtilsInstance.subString("01234567", 1, 5)
console.log({ subString })

let splitArray = stringUtilsInstance.split("abc*bcd*efg", '*')
console.log({ splitArray })

let hasPattern = stringUtilsInstance.hasPattern("banana", "nan")
console.log({ hasPattern })

let doesAllWordsContainsChar = stringUtilsInstance.allWordsContainsChar("Hello World", 'l')
console.log({ doesAllWordsContainsChar })

let reversedString = stringUtilsInstance.reverseString("Hrithik")
console.log({ reversedString })

let reversedVowel = stringUtilsInstance.reverseVowel("hello")
console.log({ reversedVowel })