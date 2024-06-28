var num = parseInt(121)

var rev = 0

while(parseInt(num)!=0){              //step1                 step 2 num=32 rev=1      step 3 num=3  rev=12
    rev=rev*10 + parseInt(num)%10     //0*10+321%10=0+1=1     1*10+32%10=10+2=12         12*10+3%10=123
    num=parseInt(num)/10              //321/10= 32            32/10=3                    3/10=0
}
console.log(rev)

//In Java StringBuffer and StringBuilder classes to reverse int numbers 

//Reverse number practice
var numToReverse = 2312

var revNum=null
while(parseInt(numToReverse)!=0){
    revNum= revNum*10 + parseInt(numToReverse)%10
    numToReverse= parseInt(numToReverse) /10
}
console.log(revNum)

