import noteService from '../services/noteService.js';
import eventBus from '../../../services/eventBusService.js'


export default function NotePinBtn(props) {
    return (
        <button onClick={() => {
            noteService.togglePinNote(props.note.id);
            eventBus.emit('togglePin', {isPinned:false})
        }} >{props.innerText}</button>
    )
}