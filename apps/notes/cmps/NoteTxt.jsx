import NotePinBtn from '../cmps/NotePinBtn.jsx';
import NoteDelete from '../cmps/NoteDelete.jsx';

export default function NoteTxt(props) {
	return (
		<article className="note-preview ">
            <p>{props.note.txt}</p>
			<NotePinBtn note={props.note} />
			<NoteDelete note={props.note} />
		</article>
	);
}
