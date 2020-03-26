let notes = getSavedNotes();
const timeStamp = moment().valueOf();
const filters = {
    searchText: '',
    sortBy: 'byEdited'
};

renderNotes(notes, filters);

'use strict'

document.querySelector('#create-note').addEventListener('click', () => {
    const id = uuidv4();
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timeStamp,
        updatedAt: timeStamp,
    });
    saveNotes(notes);
    location.assign(`./edit.html#${id}`);
})