//                                       TODO -1 (video 10)                                                

// Challenge:Define and useafunction in a new file

// 1. Createanew file called notes.js
// 2. Create getNotes function that returns"Your notes ..."
// 3. Export getNotes function
// 4. From app.js,load in and call the function printing message to console


const gets = require('./notes.js');         // > we can write anything in place of gets but the defined name(line1) must be same as of line no 3

console.log(gets())

//                                        TODO -2                                                  

const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));
console.log(chalk.red.inverse('failed'));
console.log(chalk.green.inverse('succes'));
console.log(chalk.blue.bgRed.bold('Hello world!'));