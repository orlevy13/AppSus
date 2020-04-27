import AddNote from '../apps/notes/cmps/AddNote.jsx';
// import PinnedList from '../apps/notes/cmps/PinnedList.jsx';
// import UnPinnedList from '../apps/notes/cmps/UnPinnedList.jsx';
import NotesList from '../apps/notes/cmps/NotesList.jsx';


export default class NotesApp extends React.Component {


    render() {
        return (
            <section className="notes-page flex column justify-center">
                <AddNote></AddNote>
                <NotesList />
                {/* <PinnedList></PinnedList>
                <UnPinnedList></UnPinnedList> */}
            </section>
        )
    }
}