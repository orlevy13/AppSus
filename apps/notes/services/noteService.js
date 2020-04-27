export default { addNote }

function addNote(note) {
    console.log('addNote, note:', note)
    switch (note.type) {
        case 'NoteTxt':
            return addNoteTxt(note);
    }
}

function addNoteTxt(note) {
    return
}

var notes = [
    {
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
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