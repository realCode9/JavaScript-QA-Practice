// Objects are standalone entity having properties and methods
//Declaration: direct using object literal
var nextBike = {name: "BMW", cc: 1290, origin: "US", expriry: 2038}

//Using constructor
var firstBike = new Object()
firstBike.name = "KTM"
firstBike.cc = 200 
firstBike.origin = "Japan"
firstBike.expiry = 2033
firstBike.price = 120000
firstBike.interest = function () {
   console.log("Interest is " + this.price/2)
}
console.log(firstBike)
console.log(firstBike.interest())

//Using constructor method new keyword with function
function carDetails(carCompany, carName) {
    this.carCompany = carCompany
    this.carName = carName
}

let displayCarDetails = new carDetails("Hyundai", "Verna")
console.log(displayCarDetails)

//Using prototype
var nextBike1 = {name: "BMW", cc: 1290, origin: "US", expriry: 2038}
var displayBike = Object.create(nextBike1)
console.log(displayBike)

console.log(nextBike.hasOwnProperty(cc))
console.log(nextBike.keys())

