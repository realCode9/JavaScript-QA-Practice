//Collection of characters writtern in single or double quotes
//String can be primitive or non primitive data type in JS
//String can be a object as well

var country = 'India'       //Using single quote
var quote = "I love my " + country + "!"  //Using double quites
console.log(quote)
//FUnctions
console.log(quote.length)
console.log(quote.toUpperCase())
console.log(quote.toLowerCase())
console.log(quote.charAt(10))
console.log(quote.indexOf('I'))
console.log(quote.lastIndexOf('I'))
console.log(quote.split(" "))
console.log(country.concat(" ", quote))
console.log(quote.charCodeAt(0))
console.log(quote.substring(2, 9))

console.log(quote.match('i'))
const arr = quote.matchAll('I')     //This returns iterable of matches containing results of search 
console.log(arr.next().value)
console.log(arr.next().value)

console.log(quote.valueOf())
var age = 55
console.log(age.valueOf())

console.log(Math.exp(2))
console.log(Math.round(7.38905609893065))
console.log(Math.max())
console.log(Math.min())
console.log(Math.pow(2,3))      //pow(Value, ToPower)



