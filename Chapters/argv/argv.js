const fs = require('fs');
// const command= process.argv[2];

// if(command==='add'){
//     console.log('new node added')
// }
// else if(command==='remove'){
//     console.log('node removed')
// }

const input = process.argv;                      // Input - node args.js add sampleFile 'hello im input'

if (input[2] == 'add') {
    fs.writeFileSync(input[3], input[4])
} else if (input[2] == 'remove') {
    fs.unlinkSync(input[3])
} else {
    console.log('invalid output')
}


const yargs = require('yargs')

// Customize yargs version
yargs.version('1.1.0')


yargs.command({
    command: 'addnode',
    describe: 'Adds a new note',
    handler: function () {
        console.log('adding a new note');
    }
})

yargs.command({
    command: 'removenode',
    describe: 'removes a note',
    handler: function () {
        console.log('removing a new note');
    }
})

console.log(yargs.argv)



// Create add command
yargs.command({
    command: 'add',
    describe: 'Adds two number',
    builder: {
        firstNumber: {
            describe: 'First Number',
            demandOption: true, // Required
            type: 'number'
        },
        secondNumber: {
            describe: 'Second Number',
            demandOption: true,
            type: 'number'
        }
    },

    // Function for your command
    handler(argv) {
        console.log("Result:",
            (argv.firstNumber + argv.secondNumber))
    }
})

yargs.parse() // To set above changes


yargs.command({
    command: 'add_note',
    describe: 'Adds two number',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true, // Required
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },

    // Function for your command
    handler:function(argv) {
        console.log("Title:" + argv.title)
        console.log("Body:" + argv.body)
            
    }
})

yargs.command({
    command: '_note',
    describe: 'Adds two number',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true, // Required
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },

    // Function for your command
    handler:function(argv) {
        console.log("Title:" + argv.title)
        console.log("Body:" + argv.body)
            
    }
})


