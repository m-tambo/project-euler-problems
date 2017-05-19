// https://projecteuler.net/problem=1

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

const multiSum = (x, y, top) => {
  let sum = 0, i = 0;
  for (let i = 0; i < top; i++) {
    i%x === 0 ? sum += i : i%y === 0 ? sum += i : sum
  }
  return sum
};

// test
console.log("23 should equal:", multiSum(3, 5, 10))

// solution
console.log("solution:", multiSum(3, 5, 1000))
// 233168
