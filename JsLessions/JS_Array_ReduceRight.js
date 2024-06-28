const numbers = new Array(33, 4, 5, 44, 21, 55)


//This work same as reduce but it traverse from right of the array and returns only one value at the end of iterations
const output = numbers.reduceRight(minimumunFunction)
function minimumunFunction(firstValue, nextValue) {
    console.time("Fitst value " + firstValue)
    console.log("Next second value " + nextValue)
    return max = firstValue > nextValue ? firstValue : nextValue 
}
console.log(output)