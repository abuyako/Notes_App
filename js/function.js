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