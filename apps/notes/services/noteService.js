import storageService from '../../../services/storageService.js';
import utilService from '../../../services/utilService.js';

export default { addNote, getUnPinnedNotes, getPinnedNotes, togglePinNote, query , deleteNote }

const KEY = 'notes';

function query(filterBy) {
    if (!filterBy) return Promise.resolve(gNotes);
    if (filterBy) console.log('THERE\'S A FILTER BUT THE FUNCTION DOESN\'T ACTUALLY FILTER!!')
}
function togglePinNote(noteId) {
    const note = gNotes.find(note => note.id === noteId)
    note.isPinned = !note.isPinned
    storageService.store(KEY, gNotes)
}


function getUnPinnedNotes(notes) {
    return notes.filter(note => !note.isPinned);
}
// function getUnPinnedNotes() {
//     return gNotes.filter(note => !note.isPinned);
// }

function getPinnedNotes(notes) {
    return notes.filter(note => note.isPinned);
}
// function getPinnedNotes() {
//     return gNotes.filter(note => note.isPinned);
// }

function deleteNote(noteId) {
    const noteToDeleteIdx = gNotes.findIndex(note => note.id === noteId)
    gNotes.splice(noteToDeleteIdx, 1)
    storageService.store(KEY, gNotes);
}

function addNote(note) {
    switch (note.type) {
        case 'NoteTxt':
            return Promise.resolve(addNoteTxt(note))
        case 'NoteImg':
            return addNoteImg(note);
        case 'NoteVid':
            return addNoteVid(note);
        case 'NoteTodo':
            return addNoteTodo(note);
        default:
            console.log('got to default');

            return Promise.resolve(addNoteTxt(note));
    }
}

function addNoteTxt(note) {
    const { type, txt } = note
    const noteToAdd = {
        id: utilService.makeId(4),
        type,
        isPinned: false,
        txt
    }
    gNotes.unshift(noteToAdd);
    storageService.store(KEY, gNotes);
    return noteToAdd;
}

function addNoteImg(note) {
    const { type, txt } = note;
    const noteToAdd = {
        type,
        info: {
            url: txt,
            title: "My image"
        },
        style: {
            backgroundColor: "#00d"
        }
    }
    gNotes.unshift(noteToAdd);
    storageService.store(KEY, gNotes);
}

var gNotes = [
    { id: utilService.makeId(4), type: "NoteTxt", isPinned: false, txt: "Watch a Movie!" },
    { id: utilService.makeId(4), type: "NoteTxt", isPinned: false, txt: "Set State :)" },
    { id: utilService.makeId(4), type: "NoteTxt", isPinned: false, txt: "Remember the good times" },
    { id: utilService.makeId(4), type: "NoteTxt", isPinned: true, txt: "Codding is lovely" },
    { id: utilService.makeId(4), type: "NoteTxt", isPinned: true, txt: "try to delete me" },
    { id: utilService.makeId(4), type: "NoteTxt", isPinned: true, txt: "unpin me!" },
    // { id: utilService.makeId(4), type: "NoteImg", isPinned: true,  info: { url: "http://some-img/me", title: "Me playing Mi" }, style: { backgroundColor: "#00d" } },
    // { id: utilService.makeId(4), type: "NoteTodos", isPinned: true, info: { label: "How was it:", todos: [{ txt: "Do that", doneAt: null },  { txt: "Do this", doneAt: 187111111 }]}}
];
gNotes = storageService.load(KEY) || gNotes;