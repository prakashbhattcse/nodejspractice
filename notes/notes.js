const fs = require('fs');

const getNotes = () => {
    return 'Your Notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    console.log(notes)
}

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
}