import NotePinBtn from '../cmps/NotePinBtn.jsx';
import NoteDelete from '../cmps/NoteDelete.jsx';


export default function NoteImg(props) {
    return (
        <article className="note-preview">
            <NotePinBtn note={props.note} />
            <img className="note-img-preview" src={props.note.info.url} />
			<NoteDelete note={props.note} />
        </article>
    )
}