let noteTitles = ['Einkauf', 'Aufgabe'];
let notes = ['Banane kaufen', 'Auto waschen'];

let archivNoteTitles = [];
let archivNotes = [];

let trashNoteTitles = [];
let trashNotes = [];

function init() {
    getFromLocalStorage();
    showNotes();
    showArchivNotes();
    showTrashNotes();
}

function showNotes(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = ``;

    for (let index = 0; index < notes.length; index++) {
        const note = notes[index];
        contentRef.innerHTML += getNote(note, index);
    }
    
}

function showArchivNotes(){
    let contentRef = document.getElementById('contentArchiv');
    contentRef.innerHTML = ``;

    for (let index = 0; index < archivNotes.length; index++) {
        const note = archivNotes[index];
        contentRef.innerHTML += getArchivNote(note, index);
    }
    
}

function showTrashNotes(){
    let contentRef = document.getElementById('contentTrash');
    contentRef.innerHTML = ``;

    for (let index = 0; index < trashNotes.length; index++) {
        const note = trashNotes[index];
        contentRef.innerHTML += getTrashNote(note, index);
    }
    
}

function addNote(){
    let newNoteRef = document.getElementById('newNote');
    let newNote = newNoteRef.value;
    let newTitleRef = document.getElementById('newTitle');
    let newTitle = newTitleRef.value;

    if (newNote && newTitle){
        notes.push(newNote);
        noteTitles.push(newTitle);

        newNoteRef.value = '';
        newTitleRef.value = '';

        saveToLocalStorage();

        showNotes();
    }
}

function archiveNote(indexNote) {
    let archivNote = notes.splice(indexNote, 1)[0];
    let archivNoteTitle = noteTitles.splice(indexNote, 1)[0];

    archivNotes.push(archivNote);
    archivNoteTitles.push(archivNoteTitle);

    saveToLocalStorage();

    showNotes();
    showArchivNotes();
}

function returnNote(indexNote) {
    let note = archivNotes.splice(indexNote, 1)[0];
    let noteTitle = archivNoteTitles.splice(indexNote, 1)[0];

    notes.push(note);
    noteTitles.push(noteTitle);

    saveToLocalStorage();

    showNotes();
    showArchivNotes();
}

function returnTrashNote(indexNote) {
    let note = trashNotes.splice(indexNote, 1)[0];
    let noteTitle = trashNoteTitles.splice(indexNote, 1)[0];

    notes.push(note);
    noteTitles.push(noteTitle);

    saveToLocalStorage();

    showNotes();
    showTrashNotes();
}

function deleteNote(indexNote) {
    let trashNote = notes.splice(indexNote, 1)[0];
    let trashNoteTitle = noteTitles.splice(indexNote, 1)[0];

    trashNotes.push(trashNote);
    trashNoteTitles.push(trashNoteTitle);

    saveToLocalStorage();

    showNotes();
    showTrashNotes();
}

function deleteArchivNote(indexNote) {
    let trashNote = archivNotes.splice(indexNote, 1)[0];
    let trashNoteTitle = archivNoteTitles.splice(indexNote, 1)[0];

    trashNotes.push(trashNote);
    trashNoteTitles.push(trashNoteTitle);

    saveToLocalStorage();

    showArchivNotes();
    showTrashNotes();
}

function deleteTrashNote(indexNote){
    trashNotes.splice(indexNote, 1);
    trashNoteTitles.splice(indexNote, 1);

    saveToLocalStorage();

    showTrashNotes();
}

function saveToLocalStorage(){
    localStorage.setItem("noteTitles", JSON.stringify(noteTitles));
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("archivNoteTitles", JSON.stringify(archivNoteTitles));
    localStorage.setItem("archivNotes", JSON.stringify(archivNotes));
    localStorage.setItem("trashNoteTitles", JSON.stringify(trashNoteTitles));
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
}


function getFromLocalStorage() {
    let localNoteTitles = JSON.parse(localStorage.getItem("noteTitles"));
    if (localNoteTitles != null ){
        noteTitles = localNoteTitles;
    }

    let localNotes = JSON.parse(localStorage.getItem("notes"));
    if (localNotes != null ){
        notes = localNotes;
    }
    let localArchivNoteTitles = JSON.parse(localStorage.getItem("archivNoteTitles"));
    if (localArchivNoteTitles != null ){
        archivNoteTitles = localArchivNoteTitles;
    }

    let localArchivNotes = JSON.parse(localStorage.getItem("archivNotes"));
    if (localArchivNotes != null ){
        archivNotes = localArchivNotes;
    }

    let localTrashNoteTitles = JSON.parse(localStorage.getItem("trashNoteTitles"));
    if (localTrashNoteTitles != null ){
        trashNoteTitles = localTrashNoteTitles;
    }

    let localTrashNotes = JSON.parse(localStorage.getItem("trashNotes"));
    if (localTrashNotes != null ){
        trashNotes = localTrashNotes;
    }
}