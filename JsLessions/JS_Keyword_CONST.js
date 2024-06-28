//const varName;  //This can not be invoked like this as const variables can not be used without initialization
//Const is a block scope variable
const firstName = "Lulu"
firstName = "Tulu"          //This will throw error: TypeError: Assignment to constant variable. is not possible
console.log(firstName)
