import LongTxt from '../../../cmps/LongTxt.jsx';
import NotePinBtn from '../cmps/NotePinBtn.jsx';
import NoteDelete from '../cmps/NoteDelete.jsx';
import NoteBackground from '../cmps/NoteBackground.jsx';

export default function NoteTxt(props) {
	return (
		<article className="note-preview" style={props.note.style} >
			{props.note.isPinned && <NotePinBtn note={props.note} />}
			<div className="margin" ><LongTxt txt={props.note.txt} length={200} /></div>
			<NoteDelete note={props.note} />
			<NoteBackground noteId={props.note.id} />
			{!props.note.isPinned && <NotePinBtn note={props.note} />}
		</article>
	);
}
