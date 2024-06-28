//Collection of similar data types

//Declaration ways to the array
//1. Using array literals
var arr1 = ["ele1", "ele2", "ele3"];
console.log(arr1)
//2. Using constructor and new keyword
var arr2 = new Array();
arr2[0] = "ele1"
arr2[1] = "ele2"
arr2[2] = "ele3"
console.log(arr2)
//3. Using constructor and new keyword and intitializing with constructor
var arr3 = new Array("ele1", "ele2", "ele3")
console.log(arr3)

var fruits = new Array("Apple", "Mango", "Coconut")
console.log(fruits)
fruits.forEach(fruit => {
    console.log(fruit)
})