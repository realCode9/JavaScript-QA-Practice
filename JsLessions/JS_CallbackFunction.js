//A function passed to another function as a parameter and invoked when main function completes its execution is called callback function.
//High order function: Function to which callback function is given as a parameter


//Callback function as a named function
function addition(a, b, callbackFunction) {
    let sum = a+b;
    callbackFunction(sum);
}

function displayResult(sum) {
    console.log("This is result "+ sum)
}

addition(5, 6, displayResult)

//Above example addition is High Order Function displayResult is a callback function

//Callback function as a anonymous function/function definition

function multiplication(a, b, multiplicationFunction) {
    let result = a*b;
    multiplicationFunction(result);
}

multiplication(4, 5, function (result) {
    console.log("Multiplication result is " + result)
})


//Callback function inside a callback funtion

function multiplication1(callbackFunction) {
    callbackFunction;
}

function displayOutput(a, b, displayMessage) {
    let result = a*b
    displayMessage(result)
}   

function outputMessageFunction (result) {
    console.log("Here is the final output " + result)
}

multiplication1(displayOutput(4,5, outputMessageFunction))