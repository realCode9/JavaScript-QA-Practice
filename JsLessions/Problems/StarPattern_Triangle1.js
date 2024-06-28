var pattern = ""
var spaces = ""
/*
            *
           **
          ***
         ****
*/
var rows = 5
for (let i = 1; i <= rows; i++) {           //i=2
    for (let j = 1; j <= rows - i; j++) {   //1<=2
        spaces += " "                       //
    }
    for (let k = 1; k <= i; k++) {
        pattern += "*"
    }
    console.log(spaces + pattern + "\n")
    pattern = ""
    spaces = ""
}