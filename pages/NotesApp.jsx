import AddNote from '../apps/notes/cmps/AddNote.jsx';
import NotesList from '../apps/notes/cmps/NotesList.jsx';
import noteService from '../apps/notes/services/noteService.js';
import eventBus from '../services/eventBusService.js'

export default class NotesApp extends React.Component {

    state = {
        notes: null,
        filterBy: null
    };

    componentDidMount() {
        this.loadNotes();

        eventBus.on('togglePin', (isPinned) => this.loadNotes());
        eventBus.on('deletePin', (noteId) => this.loadNotes());
        eventBus.on('changeBackground', (noteId, color) => this.onChangeBgColor(noteId, color));

        eventBus.emit('set-page', { app: 'notes' });
        eventBus.on('search-note', (data) => {
            this.setState({ filterBy: data.filter }, () => {
                this.loadNotes();
            })
        })
    }

    onChangeBgColor = (noteId, color) => {
        noteService.onChangeBgColor(noteId, color)
        this.loadNotes()
    }

    loadNotes = () => {

        noteService.query(this.state.filterBy)
            .then((notes) => this.setState({ notes }))
            .catch((err) => {
                console.log(err);
            })
    }

    onAddNote = (note) => {
        noteService.addNote(note)
            .then((note) => this.loadNotes());
    }

    render() {

        const { notes } = this.state;
        const { onAddNote } = this;

        if (!notes) return <p>Loading..</p>;

        const pinnedNotes = noteService.getPinnedNotes(notes);
        const unPinnedNotes = noteService.getUnPinnedNotes(notes);

        return (
            <section className="notes-page flex column justify-center align-center">
                <AddNote onAddNote={onAddNote} />
                {pinnedNotes.length !== 0 && <p className="pinned-others">PINNED</p>}
                <NotesList notes={pinnedNotes} />
                {unPinnedNotes.length !== 0 && <p className="pinned-others">OTHERS</p>}
                <NotesList notes={unPinnedNotes} />
                <p className="pinned-others">CoffeeRight - Or Levy - Michael Michaeli</p>
            </section>
        )
    }
}