const fs= require('fs')
const chalk = require('chalk')

const addNote = (title,body) => {
    const notes=loadNotes()
    const duplicatenote= notes.find((note) => note.title===title)

    if(!duplicatenote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note taken'))
    }
    else{
        console.log(chalk.red.inverse("Note already taken!"))
    }
}

const removeNote = (title) => {
    //console.log("Removing note...",title)
    const notes=loadNotes()
    const notesToKeep= notes.filter((note) => note.title!==title)
    
    if(notesToKeep.length === notes.length){
        console.log(chalk.red.inverse("No note found"))
    }
    else{
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse("Notes removed!"))
    }
}

const listNotes = () => {
    console.log(chalk.blue.inverse("Your Notes"))
    const notes=loadNotes()
    notes.forEach((note) =>{
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes=loadNotes()
    const note=notes.find((note) => note.title === title)

    if(note){
        console.log(chalk.blue.inverse(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.red.inverse("No note found"))
    }
}

const saveNotes = (notes) => {
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    try{
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON= databuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}