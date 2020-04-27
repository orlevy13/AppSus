export default { addNote, getUnPinnedNotes, getPinnedNotes, togglePinNote }
import storageService from '../../../services/storageService.js';
import utilService from '../../../services/utilService.js'

const KEY = 'notes';

function togglePinNote(noteId) {
    const note = gNotes.find(note => note.id === noteId)
    note.isPinned = !note.isPinned
    storageService.store(KEY, gNotes)
}

function getUnPinnedNotes() {
    return gNotes.filter(note => !note.isPinned);
}

function getPinnedNotes() {
    return gNotes.filter(note => note.isPinned);
}

function deleteNote(noteId) {
    console.log('delete');
    
}

function addNote(note) {
    switch (note.type) {
        case 'NoteTxt':
            return addNoteTxt(note);
    }
}

function addNoteTxt(note) {
    const { type, txt } = note
    const noteToAdd = {
        type,
        isPinned: false,
        txt
    }
    gNotes.unshift(noteToAdd);
    storageService.store(KEY, gNotes)
}

var gNotes = [
    { id: utilService.makeId(4), type: "NoteTxt",isPinned: false,txt: "Watch a Movie! Watch a Movie! Watch a Movie! Watch a Movie! Watch a Movie! Watch a Movie! Watch a Movie! Watch a Movie! Watch a Movie! Watch a Movie! Watch a Movie! Watch a Movie! Watch a Movie! Watch a Movie! Watch a Movie!"},
    { id: utilService.makeId(4), type: "NoteTxt", isPinned: false, txt: "Set State :)" },
    { id: utilService.makeId(4), type: "NoteTxt", isPinned: false, txt: "Remember the good times" },
    { id: utilService.makeId(4), type: "NoteTxt",  isPinned: true, txt: "Codding is lovely" },
    { id: utilService.makeId(4), type: "NoteTxt", isPinned: true, txt: "try to delete me" },
    { id: utilService.makeId(4), type: "NoteTxt", isPinned: true, txt: "unpin me!" },
    // { id: utilService.makeId(4), type: "NoteImg", isPinned: true,  info: { url: "http://some-img/me", title: "Me playing Mi" }, style: { backgroundColor: "#00d" } },
    // { id: utilService.makeId(4), type: "NoteTodos", isPinned: true, info: { label: "How was it:", todos: [{ txt: "Do that", doneAt: null },  { txt: "Do this", doneAt: 187111111 }]}}
];
gNotes = storageService.load(KEY) || gNotes;