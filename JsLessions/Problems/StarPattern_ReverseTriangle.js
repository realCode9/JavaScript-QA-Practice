var pattern=""
var spaces=""

/*
     ****
     ***
     **
     *
*/ 
var rows = 4
for(let i = 1; i<=rows;i++){
    for(let j=1;j<=5-i; j++){
        pattern+="*"
    }
    console.log(pattern+"\n")
    pattern=""
}