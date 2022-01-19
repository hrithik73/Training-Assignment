//Q3:-Find the largest number less than N whose each digit is prime number

function isPrime(n) {
  /* Function will check if the one digit number is Prime or Not 
  Then will return True or False
  */
  return (n == '2' || n == '3' || n == '5' || n == '7');
}

function findTheNumber(number) {
  // This Function will take the number and then finds the largest number less than N
  while (number > 0) {
    //Cnverting the number to String because every time we decrement the number it becomes a Number
    number = number.toString()
    let flag = false
    for (let i = 0; i < number.length; i++) {
      if (!isPrime(number[i])) {
        flag = true
        break
      }
    }
    // If found the first number which have all the digit return it
    if (!flag) {
      return number
    }
    //Else Decrements the number
    number--
  }

}

let result = findTheNumber(100)
console.log(result)