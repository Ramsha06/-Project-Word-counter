#! /usr/bin/env node

// import inquirer which is command line interface for node.js
import inquirer from "inquirer"
import chalk from "chalk"

// declare a constant answer and assign it to the result of inquirer.prompt function.

//let answer=await inquirer.prompt([{}])
// if we'll not give space in split("") it will count all letters with space.
const answer:
{                                  
    sentence: string
} = await inquirer.prompt([{
    name:"sentence",
    type:"input",
    message:(chalk.blueBright("Enter your sentence to count the word")), 
}])
const words= answer.sentence.trim().split(" ")                      //trim()  ==>Removes the leading and trailing white space/
                                                                     //  and line terminator characters from a string.
 //print the array of words to the console.                          //An object that can split a string.
                                                                     //split()=>Split a string into substrings using the 
                                                                   //specified separator and return them as an array.
console.log(words);

//print the word count of the sentence to the console.
console.log(chalk.blueBright(`Your sentence word count is  ${words.length}`));