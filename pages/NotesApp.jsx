import AddNote from '../apps/notes/cmps/AddNote.jsx';
import NotesList from '../apps/notes/cmps/NotesList.jsx';
import noteService from '../apps/notes/services/noteService.js';


export default class NotesApp extends React.Component {

    state = {
        notes: null,
        filterBy: null
    };
    // didMount- loadNotes()
    componentDidMount() {
        this.loadNotes();
    }

    // function loadNotes() - will get notes from service with filterBy + update state
    loadNotes = () => {
        noteService.query(this.state.filterBy)
            .then((notes) => this.setState({ notes }))
            .catch((err) => {
                console.log(err);
            })
    }

    // function onAddNote(note) - request to add note in service, reuse of the function loadNotes()
    onAddNote = (note) => {
        console.log('noteService.addNote(note)', noteService.addNote(note))
        noteService.addNote(note)
            .then((note) => this.loadNotes());

    }

    // render - sent notes from state to notelist + function onAddNote
    render() {

        const { notes } = this.state;
        const { onAddNote } = this;

        if (!notes) return <p>Loading..</p>;

        const pinnedNotes = noteService.getPinnedNotes(notes);
        const unPinnedNotes = noteService.getUnPinnedNotes(notes);

        return (
            <section className="notes-page flex column justify-center">
                <AddNote onAddNote={onAddNote} />
                <h1>Pinned</h1>
                <NotesList notes={pinnedNotes} />
                <h1>UnPinned</h1>
                <NotesList notes={unPinnedNotes} />
            </section>
        )
    }
}