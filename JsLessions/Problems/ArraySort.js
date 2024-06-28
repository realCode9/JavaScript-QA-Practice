//Sorting array
const arr = [12,48,6,2, -5, 0]

//Sorting array in ascending order with compareFunction
console.log("Array in ascending order " + arr.sort((a,b) =>  (a-b)))
//Sorting array in descending order with compareFunction
console.log("Array in ascending order " + arr.sort((a,b) =>  (b-a)))
console.log(arr.sort())
var sortedArray = []

for(let i =0; i<arr.length; i++){
    var arr1 = []
    for(let j=0;j<arr.length;j++){
        if(arr[i]<arr[j]){
            arr1.push(arr[i])
        }
    }
}

var strArr = ["Mango", "Orange", "Apple"]
console.log(strArr.sort())
