//Q2: Write a program (without using inbuilt functions and not using Strings or array) to swap first and last digits of any number

function swapDigit(num) {
  let len = num.toString().length - 1
  let lastDigit = num % 10
  let firstDigit = Math.floor(num / 10 ** len)
  let remainDegit = num % (10 ** len)
  let temp = remainDegit - lastDigit
  temp = temp + firstDigit
  return lastDigit * (10 ** len) + temp

}

const res = swapDigit(1009)
console.log(res)