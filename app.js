const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title,argv.body)
        //console.log('Title : ',argv.title)
        //console.log('Body : ',argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
        //console.log('Removing the note')
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
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse() //required for yargs else it was not printing anything

// const validator = require('validator')
// const y = require('yargs')
// const chalk = require('chalk')

// y.version('1.1.0')
// console.log(y.argv)

// y.command({
//     command: 'add',
//     describe: 'adding a note',
//     handler: function(){
//         console.log('adding the note')
//     }
// })

//const command = process.argv[2]

// if (command === 'add'){
//     log('Adding')
// }else if(command === 'remove'){
//     log('Removing')
// }else{
//     log(chalk.red.inverse('Command not found'))
// }


// const getNotes=require('./notes.js')

// const message=getNotes()

// console.log(message)

// //console.log(validator.isEmail('krish.kant.47@gmail.com'))
// console.log(validator.isURL('www.google.com'))

// log(chalk.blue.inverse('Success!'))

// log(process.argv[2])