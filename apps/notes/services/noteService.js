import storageService from '../../../services/storageService.js';
import utilService from '../../../services/utilService.js';

export default {
    addNote,
    getUnPinnedNotes,
    getPinnedNotes,
    togglePinNote,
    query,
    deleteNote,
    addTodo,
    getIndexById,
    toggleIsDone,
    onChangeBgColor,
    deleteTodo
}

const KEY = 'notes';

function query(filterBy) {
    if (!filterBy) return Promise.resolve(gNotes);
    const notes = gNotes.filter(note => {
        let searchPrm;
        if (note.type === 'NoteTxt') searchPrm = note.txt;
        if (note.type === 'NoteImg' || note.type === 'NoteVid') searchPrm = note.info.title;
        if (note.type === 'NoteTodo') searchPrm = note.info.label;
        return searchPrm.toLowerCase().includes(filterBy.toLowerCase());
    })
    return Promise.resolve(notes);
}

function onChangeBgColor({noteId, backgroundColor}) {
    
    const noteIdx = getIndexById(noteId)
    gNotes[noteIdx].style = { ...gNotes[noteIdx].style, backgroundColor }
    storageService.store(KEY, gNotes)
    return Promise.resolve();
}

function togglePinNote(noteId) {
    const note = gNotes.find(note => note.id === noteId)
    note.isPinned = !note.isPinned
    storageService.store(KEY, gNotes)
}

function getUnPinnedNotes(notes) {
    return notes.filter(note => !note.isPinned);
}

function getPinnedNotes(notes) {
    return notes.filter(note => note.isPinned);
}

function getIndexById(noteId) {
    return gNotes.findIndex(note => note.id === noteId)
}

function deleteNote(noteId) {
    gNotes.splice(getIndexById(noteId), 1)
    storageService.store(KEY, gNotes);
}

function addNote(note) {
    switch (note.type) {
        case 'NoteTxt':
            return Promise.resolve(addNoteTxt(note))
        case 'NoteImg':
            return Promise.resolve(addNoteImg(note));
        case 'NoteVid':
            return Promise.resolve(addNoteVid(note));
        case 'NoteTodo':
            return Promise.resolve(addNoteTodo(note));
        default:
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
        id: utilService.makeId(4),
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
    return noteToAdd;
}

function addNoteVid(note) {
    const { type, txt } = note;
    const noteToAdd = {
        id: utilService.makeId(4),
        type,
        info: {
            url: txt,
            title: "My vid"
        },
        style: {
            backgroundColor: "#00d"
        }
    }
    gNotes.unshift(noteToAdd);
    storageService.store(KEY, gNotes);
    return noteToAdd;
}

function addNoteTodo(note) {
    const { type, txt } = note;
    const noteToAdd = {
        id: utilService.makeId(4),
        type,
        isPinned: true,
        info: {
            label: txt,
            todos: []
        }
    }
    gNotes.unshift(noteToAdd);
    storageService.store(KEY, gNotes);
    return noteToAdd;
}

function addTodo(txt, noteId) {
    gNotes[getIndexById(noteId)].info.todos.unshift({ txt, doneAt: null })
    storageService.store(KEY, gNotes);
    return Promise.resolve();
}

function toggleIsDone(todoId, noteId) {
    const note = gNotes[getIndexById(noteId)]
    const todoIndex = note.info.todos.findIndex(todo => todo.id === todoId)
    const todo = note.info.todos[todoIndex]
    todo.isDone = !todo.isDone
    if (!todo.isDone) todo.doneAt = Date.now();
    return Promise.resolve()
}

function deleteTodo(todoId, noteId) {
    const note = gNotes[getIndexById(noteId)]
    const todoIndex = note.info.todos.findIndex(todo => todo.id === todoId)
    gNotes[getIndexById(noteId)].info.todos.splice(todoIndex,1)

    return Promise.resolve()
}

var gNotes = [
    {
        id: utilService.makeId(4),
        type: "NoteImg",
        isPinned: true,
        info: { url: "https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", title: "Woof!" },
        style: { backgroundColor: "white" }
    },
    {
        id: utilService.makeId(4),
        type: "NoteImg",
        isPinned: true,
        info: { url: "https://images.unsplash.com/photo-1588056725282-ac9b8a638036?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", title: "Woof!" },
        style: { backgroundColor: "white" }
    },
    {
        id: utilService.makeId(4),
        type: "NoteVid",
        isPinned: true,
        info: { url: "https://www.youtube.com/embed/LSFkZi8nNXo", title: "Vid" },
        style: { backgroundColor: "rgb(255, 194, 101)" }
    },
    {
        id: utilService.makeId(4),
        type: "NoteTxt",
        isPinned: true,
        txt: "Remember the good times",
        style: { backgroundColor: "rgb(255, 224, 130)" }
    },
    {
        id: utilService.makeId(4),
        type: "NoteTxt",
        isPinned: true,
        txt: "This is a looong text: Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely Codding is lovely ",
        style: { backgroundColor: "rgb(255, 224, 130)" }
    },
    {
        id: utilService.makeId(4),
        type: "NoteTxt",
        isPinned: true,
        txt: "try to delete me",
        style: { backgroundColor: "rgb(255, 224, 130)" }
    },
    {
        id: utilService.makeId(4),
        type: "NoteTxt",
        isPinned: true,
        txt: "unpin me!",
        style: { backgroundColor: "rgb(255, 224, 130)" }
    },
    {
        id: utilService.makeId(4),
        type: "NoteTodo",
        isPinned: true,
        info: {
            label: "Things for today",
            todos: [{ id: utilService.makeId(4), txt: "Do that", doneAt: null },{ id: utilService.makeId(4), txt: "Do this", doneAt: 187111111 }]
        },
        style: { backgroundColor: "rgb(255, 170, 175)" }
    },
    {
        id: utilService.makeId(4),
        type: "NoteTodo",
        isPinned: false,
        info: {
            label: "Things for today",
            todos: [{ id: utilService.makeId(4), txt: "Do that", doneAt: null },{ id: utilService.makeId(4), txt: "Do this", doneAt: 187111111 }]
        },
        style: { backgroundColor: "rgb(255, 170, 175)" }
    },
    {
        id: utilService.makeId(4),
        type: "NoteTxt",
        isPinned: false,
        txt: "New Note!",
        style: { backgroundColor: "rgb(255, 224, 130)" }
    },
    {
        id: utilService.makeId(4),
        type: "NoteTxt",
        isPinned: false,
        txt: "New Note!",
        style: { backgroundColor: "rgb(255, 224, 130)" }
    },
    {
        id: utilService.makeId(4),
        type: "NoteTxt",
        isPinned: false,
        txt: "New Note!",
        style: { backgroundColor: "rgb(255, 224, 130)" }
    }
];
gNotes = storageService.load(KEY) || gNotes;