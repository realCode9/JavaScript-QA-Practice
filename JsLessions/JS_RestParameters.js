//Arbitrary parameters as a Arguments used in the function
//Using variable arguments in the function which naturally does not take any argumemts as a parameters 
    //but user may want to pass the same at the runtime

//This comdition when user know how many parameters function can take
function addition () {
    var sum = arguments[0] + arguments[1]
    console.log("Sum is " + sum)
}

addition(44,55)

//But when user don't know how many parameters function can take to return result out of it
//This time we can use rest parameter as a arbitrary parameters to the function

function multiplication (...numbers) {
    var output = 1;
    for(var number of numbers) {
        output *= number
    }
    return output
}

//No of input parameters are not fixed for above multiplication function
console.log("Providing Rest Parameters as a Arbitrary parameters-- TWO parameters output is " + multiplication(4,5))
console.log("Providing Rest Parameters as a Arbitrary parameters-- THREE parameters output is " + multiplication(4,5,3))
console.log("Providing Rest Parameters as a Arbitrary parameters-- TEN parameters output is " + multiplication(4,5,3,4,5,6,2,4,3,6))