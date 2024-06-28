const bikes = ["BM", "RE", "HONDA", "KTM", "SUZUKI"]

var bikeWithCC = bikes.map(bike=> bike+2200)
console.log(bikeWithCC)

const numbers = new Array(33, 4, 5, 44, 21)
console.log(numbers)
const sqOfNumbers = numbers.map(number => number*number)
console.log(sqOfNumbers)
const squareRootOfNum = sqOfNumbers.map(number => Math.sqrt(number))
console.log(squareRootOfNum)
console.log(numbers === squareRootOfNum)
console.log(typeof(numbers) === typeof(squareRootOfNum))
console.log(typeof(numbers))
console.log(typeof(squareRootOfNum))
console.log(numbers.includes(squareRootOfNum))