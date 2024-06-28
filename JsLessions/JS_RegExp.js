//Regular expression is an JS Object which specifies perticular pattern for characters
//Defining regular expression

//1. With reg exp literal- when defining using literal always put it in forward slashes
var exp = /expression/

//2. With the object of RegExp
var exp1 = new RegExp("expression")

//there are two methods to be called on regular expressions
//test()- this method evaluate the given reg exp and return the boolean value that the pattern is present in the string or not
//exec()- this method evaluate the given reg exp and retun array of matching elements from the provided string

var testRegExp = /India/
console.log(testRegExp.test("I love my India!"))

var nameReg = new RegExp("i")
// var nameReg = /a/
const arr = nameReg.exec("Gogoi is the PM of Nation and gogoi gogoi gogoi gogoi was the opposition leader, but gogoi not able to lead the party")
console.log(arr)
console.log(arr[0])
console.log(arr[1])