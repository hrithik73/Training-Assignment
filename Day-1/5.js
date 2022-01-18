// :-> Questtion 5
// :-> Write a program to find the smallest number divisible by all the numbers between 1 to 9.


function callculateGCD(firstNumber, secondNumber) {
  // this function takes two numbers and calculate the GCD recursivly
  if (secondNumber === 0) {
    return firstNumber;
  }

  return callculateGCD(secondNumber, firstNumber % secondNumber);
}

function getTheNumberSmallestNumber(number) {
  let result = 1
  for (let i = 1; i <= number; i++) {
    result = (i * result) / (callculateGCD(result, i))
  }
  return result
}

let ans = getTheNumberSmallestNumber(9)
console.log(ans)