import NotePreview from "./NotePreview.jsx";
import noteService from "../services/noteService.js";

export default class NotesList extends React.Component {
	state = {
		pinChange: false,
	};

	pinToggled = () => {
		this.setState((prevState) => ({ pinChange: !prevState.pinChange }));
	};

	render() {
		const pinnedNotes = noteService.getPinnedNotes();
		const unPinnedNotes = noteService.getUnPinnedNotes();

		const { pinToggled } = this;

		if (!pinnedNotes && !unPinnedNotes) return <p>nothing is here yet</p>;
		return (
            <section className="notes-section flex wrap justify-center align-center">
                
                {pinnedNotes.length !== 0 && (<div><p>pinned</p></div>)}
                
				<div className="notes-list flex wrap justify-center align-center">{pinnedNotes &&pinnedNotes.map((note) => (
						<NotePreview key={note.id} note={note} pinToggled={pinToggled} />))}</div>
                
                {unPinnedNotes.length !== 0 && (<div><p>others</p></div>)}

				<div className="notes-list flex wrap justify-center align-center"> {unPinnedNotes &&unPinnedNotes.map((note) => (
                    <NotePreview key={note.id} note={note} pinToggled={pinToggled} />))}</div>
                
			</section>
		);
	}
}
