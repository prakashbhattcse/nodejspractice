const notes = require('./notes.js');
const yargs = require('yargs');
const fs =require('fs')


yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe : 'Note title',
            demandOptions : true,
            type : 'string'
        },
body:{
    describe: 'Note body',
    demandOptions:true,
    type: 'string'
}
   
 },
 handler:function(argv){
   notes.addNote(argv.title , argv.body)
 }
})

yargs.parse()
