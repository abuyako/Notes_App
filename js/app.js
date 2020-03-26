let notes = getSavedNotes();
const timeStamp = moment().valueOf();
const filters = {
    searchText: '',
    sortBy: 'byEdited'
};

renderNotes(notes, filters);

'use strict'