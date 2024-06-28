//Syntax error- compile time error
//Logical error- occured due to unexpected logic implemented by the programmer its responsibility of both dev and qa to build this error free system
//Runtime error- those occured at the time of program execution
//Runtime errors can be handled using try catch block in the javascript

function divide(a, b) {
    return a/b
}
try{
    console.log(divide(0, 1))
}catch(error){
    console.log("This is message " + error.error)
    console.log(error.message)
    console.log(error.stack)
}finally{
    console.log("Finally block executed " + (5 + 5))
}

//Creating custom exception using throw keyword

function addition(a, b) {
    if(a==b){
        throw{
            error: "Both numbers are equal",
            message: "Please change any of the numbers",
            description: "This is not expected inputs"

        }
    }else{
        return a+b
    }
}

try{ 
    console.log("Unequal numbers addition " + addition(12,10))
}catch(e) {
    console.log(e.error)
    console.log(e.message)
    console.log(e.description)
}
