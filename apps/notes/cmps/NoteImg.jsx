import NotePinBtn from '../cmps/NotePinBtn.jsx';
import NoteDelete from '../cmps/NoteDelete.jsx';

export default function NoteImg(props) {
    return (
        <article className="note-preview ">
            <img src={props.note.info.url} />
            <NotePinBtn note={props.note} />
			<NoteDelete note={props.note} />
        </article>
    )
}