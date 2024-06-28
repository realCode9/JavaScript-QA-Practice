export class demoClass{

    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    printFirstName() {
        console.log("Details are " + this.firstName + " " + this.lastName + " " + this.age)
    }
}
var obj = new demoClass("Tarun", "Mehta", 33);
var obj1 = new demoClass("Varun", "Chakroborty", 34)
obj.printFirstName()
obj1.printFirstName()


//Using static variables and methods in javascript class
class staticClass{
    static bikeName = "KTM";
    static bikePrice = 150000;
    static bikesDetails() {
        console.log("Bike details are " + this.bikeName + " " + this.bikePrice)
    }
    bikesDetailsNonStatic() {
        console.log("Bike details are " + this.bikeName + " " + this.bikePrice)
    }
    constructor(n, p){
        this.bikeName = n
        this.bikePrice = p
    }
}
//Calling static method of class
staticClass.bikesDetails()

//Calling non static method (Method using static variables in it)of class by creating object of class
let staticObj = new staticClass("LTM", 180000)
staticObj.bikesDetailsNonStatic()