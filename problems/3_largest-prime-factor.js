// https://projecteuler.net/problem=3

// The prime factors of 13195 are 5, 7, 13 and 29.
// Find the greatest prime factor of the number 600851475143

const isNumberAFactor = (dividend, divisor) => {
  return dividend % divisor === 0
}

const isNumberPrime = (number) => {

}

const findGreatestPrimeFactor = (number) => {
  while (!greatestPrimeFactor) {

  }
  return greatestPrimeFactor
}

// tests
console.log(`${isNumberAFactor(10, 5)} should be true`)
console.log(`${isNumberAFactor(10, 3)} should be false`)
console.log(`${isNumberPrime(11)} should be true`)
console.log(`${isNumberPrime(10)} should be false`)
