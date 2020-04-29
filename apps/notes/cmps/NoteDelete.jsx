import noteService from '../services/noteService.js';
import eventBus from '../../../services/eventBusService.js'


export default function NotePinBtn(props) {
    return (
        <button onClick={() => {
            noteService.deleteNote(props.note.id);
            eventBus.emit('deletePin', {noteId: props.note.id})
        }} ><img className="trash" src="./apps/notes/assets/img/trash.png" /></button>
    )
}