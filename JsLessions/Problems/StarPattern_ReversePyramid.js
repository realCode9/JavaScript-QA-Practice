var pattern = ""
var spaces = ""

/*
    * * * * *
     * * * *
      * * *
       * *
        *
*/
var rows=10
for(let i=rows;i>=1;i--){          
    for(let k=1;k<=rows-i;k++){ 
        spaces+=" " 
    }
    for(let j=rows-1;j>=rows-i;j--){
        pattern+="* "
    }
    console.log(spaces+pattern+"\n")
    pattern=""
    spaces=""
}