
// imp Hello

// s.imp                     



const fs = require('fs');
// const chalk = require('chalk');


// > This method is used to create a new file and put content inside it                            
// fs.writeFileSync('notes.txt' , 'This is the data inside ndoes.txt')

// > This method is used to adding text inside a file without replacing the text inside of it      
// fs.appendFileSync('notes.txt' , '  This is another data added')



// # VALIDATOR

const validator = require('validator');

console.log(validator.isEmail('foo@bar.com'));                        // o/p - true

// # CHALK

const chalk = require('chalk');
const { Console } = require('console');
console.log(chalk.blue('Hello world!'));


const command= process.argv[2];

if(command==='add'){
    console.log('new node added')
}
else if(command==='remove'){
    console.log('node removed')
}

