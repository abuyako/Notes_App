'use strict'

// Read the existing notes from the local storage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes');

    try{
        return notesJSON ? JSON.parse(notesJSON) : [];
    }catch (e){
        return [];
    }
}

// save notes to localstorage 
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
}

// remove notes by id 
const removeNote = (id) => {
    const index = notes.findIndex((note) => note.id === id)

    if (index > -1) {
        notes.splice(index,1);
    }
}