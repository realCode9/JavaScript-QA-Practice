var namOfJap = "Ram Krishna Hari"           //Declaration and initialization
console.log(namOfJap)

namOfJap = "Jay Jay Ram Krishna Hari"       //Redeclaration within the same scope

function printNam() {
    var newName = "Jekon Jasin"
    namOfJap = "Ram ram ram ram"            //Redeclaration of var variable in the different scope
    console.log(newName)
    console.log(namOfJap)
}
printNam()
//console.log(newName)            //Var declared within the block of function in line 7 can not accessed outside of function


//Hoisting of variable with var keyword
console.log(age)        //This will declare variable at the top of usage but initialize with undefined value
var age = 24;
console.log(age)