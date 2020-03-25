'use strict'

const titleElement = document.querySelector('#note-title');
const timeElement = document.querySelector('#time-stamp');
const bodyElement = document.querySelector('#note-body');
const noteId = location.hash.substr(1);
let notes = getSavedNotes();
let note = notes.find((note) => note.id === noteId);