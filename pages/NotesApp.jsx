import AddNote from '../apps/notes/cmps/AddNote.jsx';
import PinnedList from '../apps/notes/cmps/PinnedList.jsx';
import UnPinnedList from '../apps/notes/cmps/UnPinnedList.jsx';


export default class NotesApp extends React.Component {


    render() {
        return (
            <section>
                <h1>Notes</h1>
                <AddNote></AddNote>
                <PinnedList></PinnedList>
                <UnPinnedList></UnPinnedList>
            </section>
        )
    }
}