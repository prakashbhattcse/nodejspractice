const notes = require('./notes.js');
const yargs = require('yargs');
const fs = require('fs')


yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOptions: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOptions: true,
            type: 'string'
        }

    },
    handler: (argv)=> {
        notes.addNote(argv.title, argv.body)
    }
})



yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true, // Required
            type: 'string'
        }
    },

    // Function for your command
    handler:(argv) =>{
        notes.removeNote(argv.title)

    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()