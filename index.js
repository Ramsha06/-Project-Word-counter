#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import inquirer which is command line interface for node.js
const inquirer_1 = __importDefault(require("inquirer"));
// declare a constant answer and assign it to the result of inquirer.prompt function.
//let answer=await inquirer.prompt([{}])
// if we'll not give space in split("") it will count all letters with space.
const answer = await inquirer_1.default.prompt([{
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word",
    }]);
const words = answer.sentence.trim().split(" "); //trim()  ==>Removes the leading and trailing white space/
//  and line terminator characters from a string.
//print the array of words to the console.                          //An object that can split a string.
//split()=>Split a string into substrings using the 
//specified separator and return them as an array.
console.log(words);
//print the word count of the sentence to the console.
console.log(`Your sentence word count is  ${words.length}`);
