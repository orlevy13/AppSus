import NoteTxt from './NoteTxt.jsx';
import NoteImg from './NoteImg.jsx';
import NoteVid from './NoteVid.jsx';
import NoteTodo from './NoteTodo.jsx';


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
