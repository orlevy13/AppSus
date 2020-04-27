export default { addNote }
import storageService from '../../../services/storageService.js';

const KEY = 'notes';

function addNote(note) {
    console.log('addNote, note:', note)
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
    {
        type: "NoteText",
        isPinned: true,
        txt: "Fullstack Me Baby!"
    },
    {
        type: "NoteImg",
        info: {
            url: "http://some-img/me",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        type: "NoteTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    }
];