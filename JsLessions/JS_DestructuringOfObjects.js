//Destructuring can be done for both objects and Arrays in javascript
//Destructuring means assigning values of array or properties of objects to the local variable(same name or different names)

//Destructuring of Objects
var bike = {
    bikeName: "KTM",
    bikeCC: 200,
    bikeMilege: 35,
    bikeColor: "white",
    bikePrice: 150000,
    bikeOwner: {
        ownerName: "Tarun",
        ownerProf: "IT Professional",
        ownerAge: 28
    }
}
//1. Destructuring of objects using same names as object properties names
var {bikeName, bikePrice} = bike
console.log("Destructured using same names as object--Bike name and its price is " + bikeName + " " + bikePrice)

//2. Destructuring of objects using variable names different from the object variable names
var {bikeName: name, bikePrice: price} = bike
console.log("Destructured using different names then object--Bike name and its price is " + name + " " + price)

//3. Destructuring nested properties of objects
var {bikeOwner:{ownerName, ownerAge}, bikeName} = bike
console.log("Destructured using same names as object-- Owner and his age of bike " + " "+ bikeName + " " + ownerName + " " + ownerAge)
