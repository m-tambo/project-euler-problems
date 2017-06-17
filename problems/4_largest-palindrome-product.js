// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

const isNumberAPalindrome = (number) => {
  let arrayOfDigits = number.toString().split('')
  for (let i = 0; i < arrayOfDigits.length; i++) {
    if (arrayOfDigits[i] !== arrayOfDigits[arrayOfDigits.length - 1 - i]) {
      return false
    }
  }
  return true
}

const findLargestPalindromeProduct = (upperLimit) => {

}

// tests
console.log(`${isNumberAPalindrome(123321)} should be true`)
console.log(`${isNumberAPalindrome(1234321)} should be true`)
console.log(`${isNumberAPalindrome(123421)} should be false`)
console.log(`${findLargestPalindromeProduct(100)} should be 9009`)

// solution
console.log(`solution: ${findLargestPalindromeProduct(1000)}`)
//
