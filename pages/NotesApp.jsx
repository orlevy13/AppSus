import AddNote from '../apps/notes/cmps/AddNote.jsx';
import NotesList from '../apps/notes/cmps/NotesList.jsx';


export default class NotesApp extends React.Component {

    state = {
        noteAdd: false,
    };

    noteAdded = () => {
        this.setState((prevState) => ({ noteAdd: !prevState.noteAdd }));
    };

    render() {
        const { noteAdded } = this;
        return (
            <section className="notes-page flex column justify-center">
                <AddNote noteAdded={noteAdded} />
                <NotesList />
            </section>
        )
    }
}