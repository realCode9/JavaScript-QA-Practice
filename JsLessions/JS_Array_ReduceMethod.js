const numbers = new Array(33, 4, 5, 44, 21, 55)


//Reduce method takes reducer method as a parameter and perform reducing operation on each element of the
    //original array and returns only one element as a output to the array
const largestNumber = numbers.reduce(reducerFunction);
var iteration = 1;
function reducerFunction(firstValue, nextValue) {
    console.log("Iteration " + iteration)
    console.time("Fitst value " + firstValue)
    console.log("Next second value " + nextValue)
    iteration++
    // return Math.max(firstValue, nextValue)
    return maxOfTwo = nextValue > firstValue ? nextValue : firstValue;
}

console.log(largestNumber);