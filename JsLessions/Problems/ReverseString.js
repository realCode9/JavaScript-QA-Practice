//Reverse String of a given string

var str = "!aidnI ym evol I"
var strLength = str.length;
var revStr="";

for(let i =strLength-1; i>=0; i--){
    revStr = revStr +  str.charAt(i)
}
console.log(revStr)