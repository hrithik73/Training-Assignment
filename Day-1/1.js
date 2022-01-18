
function getTheLargestNumberLessThan(number) {
  let num = number.toString()
  let flag = false
  // console.log(num)
  while (num != 0) {
    for (let i = 0; i < num.length; i++) {
      if (num[i] !== '2' || num[i] !== '3' || num[i] !== '5' || num[i] !== '7') {
        flag = true
      }
    }
    if (flag)
      return num
    num = num - 1
  }
}

let ans = getTheLargestNumberLessThan(56)
console.log(ans)