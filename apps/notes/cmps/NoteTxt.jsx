import NotePinBtn from '../cmps/NotePinBtn.jsx';
import NoteDelete from '../cmps/NoteDelete.jsx';
import LongTxt from '../../../cmps/LongTxt.jsx';

export default function NoteTxt(props) {
	return (
		<article className="note-preview ">
            {/* <p>{props.note.txt}</p> */}
            <LongTxt txt={props.note.txt} length={25} />
			<NotePinBtn note={props.note} />
			<NoteDelete note={props.note} />
		</article>
	);
}
