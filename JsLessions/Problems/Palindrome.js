let x=121

let newX = x
let revNum=0
    while(parseInt(x)!=0){
        revNum= revNum*10 + parseInt(x)%10
        x= parseInt(x)/10
    }
console.log(newX==revNum)