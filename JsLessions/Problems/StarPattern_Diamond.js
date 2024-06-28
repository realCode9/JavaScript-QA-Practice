var pattern=""
var spaces=""

/*
        *
       * *
      * * *
     * * * *
    * * * * *
     * * * *
      * * *
       * *
        *
*/
var rows = 20
for(let i=1;i<=rows; i++){
    for(let j=1; j<=rows-i; j++){
        spaces+=" "
    }
    for(let k=1;k<=i;k++){
        pattern+="* "
    }
    console.log(spaces+pattern+"\n")
    pattern=""
    spaces=""
}

for(let i=1;i<=rows; i++){
    for(let j=rows-1; j>=rows-i ; j--){
        spaces+=" "
    }
    for(let k=1;k<=rows-i;k++){
        pattern+="* "
    }
    console.log(spaces+pattern+"\n")
    pattern=""
    spaces=""
}


