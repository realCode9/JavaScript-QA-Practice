//Destructuring of arrays is based on the index address of the array
const flowers = ["Mandar", "Jai", "Jui", "Champak", "Bakule"]
//We can access and store array values to the local variables using two methods 
//1. From the begining of the array that is : Basic Ordered Restructuring
//This approach starts destructuring from the beginning of the array and return from start

var [f1, f2, f3] = flowers
console.log("Destructured array with basic ordered restructuring-- I have flowers in the garden that are " + f1 +  "," + f2 + "," + f3)

//2. Skipping some of the values of the array using , in the variable declaration
//One comma after one variable is for the actual use of making seperation but next comma is for skipping one value of the array
var [f1,,f2,,f3] = flowers  
console.log("Destructured array using skip some of the array elements-- I have flowers in the garden that are " + f1 +  "," + f2 + "," + f3)