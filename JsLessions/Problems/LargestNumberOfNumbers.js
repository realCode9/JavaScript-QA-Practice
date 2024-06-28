//Largest of three numbers
//Using array and max operation of Math
const arr = [4, 34, 56]

// console.log(Math.max(arr[0], arr[1], arr[2]))

//Using if else comparison
var x= 33
var y= 58
var z= 58

if(x>=y && x>=z){
    console.log(x)

}else if(y>=x && y>=z){
    console.log(y)

}else {
    console.log(z)
}
//Using ternary operator
var largest = (x>=y && x>=z) ? x : (y>=x && y>=z) ? y : z 
console.log(largest)