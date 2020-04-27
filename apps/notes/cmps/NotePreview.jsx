import noteService from '../services/noteService.js'

export default function NotePreview(props) {
	switch (props.note.type) {
		case "NoteTxt":
			return (
				<article className="notes-preview ">
                    <p>{props.note.txt}</p>
                    {props.note.isPinned && <button onClick={() => {
                                            noteService.togglePinNote(props.note.id);
                                            props.pinToggled()
                    }} >UnPin</button>}
                    {!props.note.isPinned && <button onClick={() => {
                                            noteService.togglePinNote(props.note.id);
                                            props.pinToggled()
                    }} >Pin</button>}
				</article>
			);
		default:
			break;
	}
}
