import NotePinBtn from '../cmps/NotePinBtn.jsx';
import NoteDelete from '../cmps/NoteDelete.jsx';
import LongTxt from '../../../cmps/LongTxt.jsx';

export default function NoteTxt(props) {
	return (
		<article className="note-preview ">
			<NotePinBtn note={props.note} />
            <div className="margin" ><LongTxt txt={props.note.txt} length={200} /></div>
			<NoteDelete note={props.note} />
		</article>
	);
}
