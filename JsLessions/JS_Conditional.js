
function voterEligibility(age){
    if(age >=18) {
        console.log("You are eligible to vote!")
    }
}
// voterEligibility(20)

function voterEligibility1(age , voterId){
    if(age >=18 && voterId == true) {
        console.log("You are eligible to vote!")
    }else{
        console.log("Please wait until you become 18!")
    }
}
// voterEligibility1(15, true)

function voterEligibility2(age , voterId){
    if(age >=18 && voterId == true) {
        console.log("You are eligible to vote!")
    }else if(age>=18 && voterId == false){
        console.log("Please apply for the voter id!")
    }else if(age<18 && voterId==false) {
        console.log("You are not eligible to vote!")
    }
}
// voterEligibility2(15, false)


//Switch
var condition = false
    switch(condition) {
        case true:
                console.log("You are eligible to vote!")
                break;
        case false:
                console.log("You are not eligible to vote!")
                break;
        default:
            console.log("Visit EC")
    
    }

//weekdays
day = 1
switch(day) {
    case 1:
        console.log("First Workday- lazy")
        break;
    case 2:
        console.log("Second Workday- focused")
        break;
    case 3:
        console.log("Third workday- wed day")
        break;
    case 4:
        console.log("Forth day");
        break
    case 5:
        console.log("Happy day- its weekend now")
        break;
    case 6:
        console.log("Weekend arrived--party")
        break;
    case 7:
        console.log("Go on ride");
        break;
    default:
        console.log("Specify day correctly");
    
}
