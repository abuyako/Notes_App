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

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('a');
    const textEl = document.createElement('p');
    const statusEl = document.createElement('p');

    // Setupe the note title text
    if (note.title.length > 0){
        textEl.textContent = note.title;
    }else {
        textEl.textContent = 'Unnamed note';
    }
    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl);

    // Setup the link
    noteEl.setAttribute('href', `./edit.html#${note.id}`)
    noteEl.classList.add('list-item')
}