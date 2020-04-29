import NotePinBtn from '../cmps/NotePinBtn.jsx';
import NoteDelete from '../cmps/NoteDelete.jsx';
import NoteBackground from '../cmps/NoteBackground.jsx';

export default function NoteImg(props) {
    return (
        <article className="note-preview" style={props.note.style} >
            {props.note.isPinned && <NotePinBtn note={props.note} />}
            <img className="note-img-preview" src={props.note.info.url} />
            <NoteDelete note={props.note} />
            <NoteBackground noteId={props.note.id} />
            {!props.note.isPinned && <NotePinBtn note={props.note} />}
        </article>
    )
}