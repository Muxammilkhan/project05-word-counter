#!/usr/bin/env node



import inquirer from "inquirer";
import chalk from "chalk";
// declare a constant 'answer ' and assign it to the result of inquirer.promt function 
  
console.log(chalk.green("\n \t  'welcome to the word counter \'ode wit muzami\'\n"))



const answers:{
    sentence:string
} = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message: chalk.magenta("Enter your sentence to count the word:")
    }
])
const words = answers.sentence.trim().split("")

console.log(words)

console.log(chalk.red(`your sentence word count is ${words.length}`));