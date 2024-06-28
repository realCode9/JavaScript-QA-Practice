const bikes = ["BM", "RE", "HONDA", "KTM", "SUZUKI"]

bikes.forEach(bike => {
    console.log(bike)
})
console.log(bikes.length)
bikes.push("KAWASAKI")      //add at the end of array
console.log(bikes)
bikes.unshift("Yezdi")      //Add at start of array
console.log(bikes)
bikes.pop()                 //Remove from end of array
console.log(bikes)
bikes.shift()                 //Remove from start of array
console.log(bikes)
console.log(bikes.indexOf("KTM"))
console.log(bikes.includes("KAWASAKI"))     //Returns false
console.log(bikes.includes("BM"))     //Returns True
bikes.splice(bikes.indexOf("KTM"), 0)       //Splice method use to remove elements from array starting from given index as a first
                                            //parameter and second parameter as how many elements to be removed from array if second parameter is absent 
                                            //then splice will remove all elements next to the element at the index given along with the element at that index
console.log(bikes)
