function Employee() {
    this.name = 'Arun';
    this.role = 'QA';
}

var empObj1 = new Employee();
empObj1.salary = 30000;
console.log(empObj1.salary); 

//This object can not access the property created by another instance of object so here comes prototype in picture in JS to direct
//add variables and methods to the existing objects and access with any of the instance of object
var empObj2 = new Employee();
console.log(empObj2.salary);

Employee.prototype.Author = "Arunkumar"

console.log(empObj1.Author)
console.log(empObj2.Author)

//Adding variables and functions/methods in JavaScript
function fruitsProp() {
    this.color = "Red",
    this.fresh = true
}
var fruit = new fruitsProp();
console.log(fruit)
//Add new property with variable name to it
fruitsProp.prototype.taste = "bitter"
console.log(fruit.taste)
console.log(fruit)

//Add new method to the fruit object 
fruitsProp.prototype.isJuicable = () => {
    if(fruit.taste == "bitter") {
        console.log("Not juicable")
    }else{
        console.log("Juicable")
    }
}

console.log(fruit.isJuicable());