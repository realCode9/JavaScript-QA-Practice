
// Declaring, initializing and assigning values to JS Variables
var firstName = "Gokul"
let lastName = "Mane"
const marks = 55

console.log(firstName)
console.log(lastName)
console.log(marks)

//Method without parameter
function printStudentDetails() {
    console.log(`Name is ${firstName} ${lastName} and marks are ${marks}`)
}
//Calling method to perform task
printStudentDetails()

//Local Variable
function localVariableFunction() {
    var bikeName = "BMW"
    console.log(bikeName)
}
localVariableFunction()
// console.log(bikeName)       This will give bikeName is not defined reference error as user trying to access local variable of method

//In this scope firstName lastName and marks are global variable so we can access those anywhere
function globalVariable() {
    console.log(`First name is ${firstName}`)
} 
globalVariable()