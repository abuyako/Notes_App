'use strict'

const titleElement = document.querySelector('#note-title');
const timeElement = document.querySelector('#time-stamp');
const bodyElement = document.querySelector('#note-body');
const noteId = location.hash.substr(1);
let notes = getSavedNotes();
let note = notes.find((note) => note.id === noteId);

if (!note) {
    location.assign('./index.html');
}

//Get the existing note info from the page.
timeElement.textContent = generateLastEdited(note.updatedAt);
titleElement.value = note.title;
bodyElement.value = note.body;