function swapNumber(num) {
  let len = num.toString().length - 1
  let lastDigit = num % 10
  let firstDigit = Math.floor(num / 10 ** len)
  let remain = num % (10 ** len)
  let temp = remain - lastDigit
  temp = temp + firstDigit
  return lastDigit * (10 ** len) + temp

}

const res = swapNumber(1009)
console.log(res)