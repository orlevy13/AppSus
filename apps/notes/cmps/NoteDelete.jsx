import noteService from '../services/noteService.js';
import eventBus from '../../../services/eventBusService.js'


export default function NotePinBtn(props) {
    return (
        <button onClick={() => {
            noteService.deleteNote(props.note.id);
            eventBus.emit('deletePin', {noteId: props.note.id})
        }} >Delete</button>
    )
}