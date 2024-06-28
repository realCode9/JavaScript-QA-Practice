var pattern = ""
var spaces = ""
/*
               *
              * *
             * * *
            * * * *
           * * * * *
*/

var rows =5

for(let i=1;i<=rows;i++){
    for(let j=1;j<=rows-i;j++){
        spaces+=" "
    }
    for(let k=1;k<=i;k++){
        pattern+="* "
    }
console.log(spaces+pattern+"\n")
pattern=""
spaces=""
}

