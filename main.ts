#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance= 100000;
let myPin= 7878;

let pinNumber=await inquirer.prompt (
    [
{
    name: "atmMachine",
    message: "enter your 4 digit pin code",
    type: "number"
}
    ]
);
if(pinNumber.atmMachine===myPin ){
    console.log("correct pin code")

let operationAns= await inquirer.prompt(
    [
        {
         name:"operation",
        message: "please select option",
        type:"list",
        choices: ["withdraw","check balance","quick cash"]

         }
    ]
);
console.log(operationAns);
 if(operationAns.operation==="withdraw" ){
let amountAns = await inquirer.prompt(
[
    {
        name: "amount",
        message: "enter your amount",
        type:"number"
    }
]
);
if(amountAns.amount > myBalance) {
    console.log("Invalid amount: Insufficient funds");}
else{
 myBalance-=amountAns.amount 
 console.log(`Your remaining balance is ${myBalance}`)
}

 }
else if(operationAns.operation==="quick cash"){
    let cashOption = await inquirer.prompt(
     [

        {
            name:"cashAmount",
            type:"list",
            message:"select your amount you want to withdraw",
            choices:[
                {name:"$20",value:5559},
                {name:"$50",value:13897},
                {name:"$80",value:22236},
                {name:"$100",value:27795}
        ]
        }
     ]   
    );
    if(cashOption.cashAmount > myBalance) {
        console.log("Invalid amount: Insufficient funds");}
   
   else{
        myBalance-=cashOption.cashAmount 
    console.log(`Your remaining balance is ${myBalance}`)}
}

else if(operationAns.operation==="check balance"){
    console.log(`Your balance is ${myBalance}`)
    
}
}


else{
    console.log("invalid pin code");
}