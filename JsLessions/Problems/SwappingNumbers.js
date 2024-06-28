var a= 12
var b=13
console.log("Before swapping numbers are " + a + " " + b)

//Using third variable
/*
var c= a    //a chi value c la dili
a=b         //b cho value a la dili
b=c         //a chi value c madhe thevleli b la dili zali swapping
console.log("After swapping numbers are " + a + " " + b)
*/
//using + and - arithmatic operator
/*
a=a+b   //25
b=a-b  //25-13=12
a=a-b  //25-12=13
console.log(a + " " + b)
*/
//Using * and / operator
// a=a*b
// b=a/b
// a=a/b
// console.log(a + " " + b)

//using single statement=> Execting operation from right to left
b=a+b- (a=b)               //b=12+13-(13) => b= 12 and a = 13 from a=b statement
console.log(a + " " + b)

