var BALANCE="20000";
console.log(BALANCE);
console.log("*******WELCOME********");
console.log("*******TO ATM*******");
const readlineSync=require("readline-sync")
var ATM_CARD=readlineSync.question("what is the card")
if (ATM_CARD == "card"){
    //console.log("correct");

    console.log("hindi");
    console.log("english");
    console.log("marathi");
    var language =  readlineSync.question("enter the language")
    if (language =="hindi" || "english" || "marathi"){

        //console.log("your choose launguage is correct");
        console.log("saving");
        console.log("current");
        var account = readlineSync.question("enter the account type")
        if (account == "saving" || account == "current"){
            //console.log("ok");
        
            var pin_code = readlineSync.questionInt("enter the pin code")
            if (pin_code==1234){
                console.log("correct");
                console.log("withdraw");
                console.log("balance enquiry");
                console.log("deposit");
                var choice=readlineSync.questionInt("enter the choice")
                if (choice=="withdraw"||"balance enquiry"||"deposit"){
                }
                var amount_cash = readlineSync.questionInt("enter the amount cash")
                if (amount_cash>0 && amount_cash<20000){
                    console.log(`${amount_cash} withdraw money`);
                    console.log(`${20000-amount_cash} remaining money in ATM`);
                }   
                else{
                    console.log(`${amount_cash} This amount is not your account`)
                }
            }

            else{
                console.log("This is not your pin code")  
            }
        }
        else{
            console.log("This is not account")
        }
    }
    else{
        console.log("incorrect launguage")
    }
}
else{
    console.log("this is not atm card")
}

