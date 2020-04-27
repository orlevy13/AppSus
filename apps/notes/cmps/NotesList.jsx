import NotePreview from "./NotePreview.jsx";
// import noteService from "../services/noteService.js";


export default function NotesList(props) {

	return (
		<section className="notes-section flex wrap justify-center align-center">
			{props.notes.map(note => {
				return <NotePreview key={note.id} note={note} />
			})}
		</section>
	)
}
