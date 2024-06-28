let varName = "James"
console.log(varName)

//Hoisting of variable with let keyword- variable with let keyword hoist to the top but not initialize to undefined value 
// console.log(varNameForHoist)        //This will give: ReferenceError: Cannot access 'varNameForHoist' before initialization
let varNameForHoist = "James"

//scope
function printVarName() {
    let newName = "David"
    console.log(varName)
    console.log(newName)
}
printVarName()
console.log(newName)        //This will give error as it is accessing variable declared with block scoped variable name let

//Re-declaring in the same scope will give error: Cannot redeclare block-scoped variable 'varName'.
//Let keyword is block scoped
// let varName = "Jakob"
console.log(varName)

let age;