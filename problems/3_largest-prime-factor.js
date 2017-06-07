// The prime factors of 13195 are 5, 7, 13 and 29.
// Find the greatest prime factor of the number 600851475143

const isNumberAFactor = (dividend, divisor) => {
  return dividend % divisor === 0
}

const isNumberPrime = (number) => {
  for (let i = 2; i < number; i++) {
    if (number%i === 0) return false
  }
  return true
}

const findGreatestPrimeFactor = (number) => {
  for (let i = 2; i <= number; i++) {
    if (isNumberAFactor(number, i) && isNumberPrime(number / i)) return number / i
  }
}

// tests
// console.log(`${isNumberAFactor(10, 5)} should be true`)
// console.log(`${isNumberAFactor(10, 3)} should be false`)
// console.log(`${isNumberPrime(13)} should be true`)
// console.log(`${isNumberPrime(10)} should be false`)
// console.log(`${findGreatestPrimeFactor(13195)} should be 29`)
// console.log(`${findGreatestPrimeFactor(137)} should be 137`)

// solution
console.log(`solution: ${findGreatestPrimeFactor(600851475143)}`)
// 6857
