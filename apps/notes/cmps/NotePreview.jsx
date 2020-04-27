import NoteTxt from './NoteTxt.jsx';


export default function NotePreview(props) {
    const { note } = props
    switch (note.type) {
        case "NoteTxt":
            return <NoteTxt note={note} />
        case "NoteImg":
            return <NoteImg note={note} />
        case "NoteVid":
            return <NoteVid note={note} />
        case "NoteTodo":
            return <NoteTodo note={note} />
    }
}
