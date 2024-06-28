//For loop
var loopCount = 10;
for(let i = 1; i<=loopCount; i++){
    console.log("This is " + i +"th loop iteration!")
}

//For Each loop
const names = ["john", "kevin", "pran"]

names.forEach(name => {
    console.log(name)
})

//For In loop
const fruits = []
fruits[0] = "Mosambi"
fruits[2] = "Jamun"
fruits[1] = "Amba"

console.log(fruits)

for(var fruit in fruits) {
    console.log(fruits[fruit])
}

//For of loop
const fruitsOf = ["Apple", "Banana", "Watermelon"]
for(var fruit of fruitsOf) {
    console.log("Fruit of of loop " + fruit)
}

//While loop or Entry controlled loop
var cond = 10;
var i = 1;
while(i<=cond) {
    console.log(i)
    if(i==5)
        break
    i++;
}

//Do While loop Or Exit controlled loop
var j = 2
do{
    console.log(j)
    j=j+2;
}while(j<=25)