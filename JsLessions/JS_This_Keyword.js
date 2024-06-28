//this used in the functions when using this function as a property of object
var firstBike = {
    bikeName: "KTM",
    cc: 200,
    average: function () {
        return this.bikeName + " has best average with " + this.cc
    }
}
console.log(firstBike.average())


//this used globally alone
var firstName1 = this
console.log(firstName1)

//When used in function it refers to the global object
var firstName = "Varun"
var lastName = "Dhavam"
var printName = () =>  `Full name of customer is ${firstName} ${lastName}`
console.log(printName())


// refers to the global object
// var display = function () {
//     return this
// }
// console.log(display())

//Used in strict mode
"use strict";
function strictFunction () {
    return this
}
console.log("This keyword in function : " + strictFunction())