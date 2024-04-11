import inquirer from "inquirer";
let connversion = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1
    },
    "USD": {
        "PKR": 225.50,
        "GBP": 0.83,
        "USD": 1
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency :"
    },
    {
        type: "list",
        name: "To",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your conversion currency :"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your ammount to Convert"
    },
]);
console.log(answer);
