#! /usr/bin/env node 
import inquirer from "inquirer";
let conversion : any= {
  "PKR":{
    "USD":0.004,
    "GBP":0.0037, // british pound sterling
    "PKR":1,      // pakistani rupees 
    "SAR":0.014, // saudi riyal
    "TRY":0.116,  // turkish lira
    "INR":0.301,  // Indian rupee
    "CNY":0.026   // chinees yuan
  },
  "GBP":{
    "USD":1.245,
    "PKR":341.81,
    "GBP":1,
    "SAR":4.67,
    "TRY":40.27,
    "INR":103.993,
     "CYN":9.01,
  },
  "USD":{
     "PKR":225.50,
     "GBP":0.803,
     "USD":1,
     "SAR":3.751,
     "TRY":32.342,
     "INR":83.52,
     "CNY":7.237,
  }
}
const answer : {
  from:"PKR" | "USD" | "GBP" ,
  to:"PKR" | "USD" | "GBP" | "SAR" | "TRY" | "INR" | "CNY",
  amount:number
} = await inquirer.prompt([
  {
    type:"list",
    name:"from",
    choices:["PKR" , "USD" , "GBP"],
    message:"Select your currency :"
  },
  {
    type:"list",
    name:"to",
    choices:["PKR" , "USD" , "GBP" , "SAR" , "TRY" , "INR" , "CNY"],
    message:"Select your conversion currency :"
  },
  {
    type:"number",
    name:"amount",
    message:"Enter your ammount to Convert :"
  }
]);
const {from,to,amount} = answer;
if(from && to && amount){
 let result :any =  conversion[from][to] * amount;
 console.log(`your conversion from ${from} to ${to} is ${result}`)
}
else{
  console.log("Invalid Input");
}

console.log(answer);