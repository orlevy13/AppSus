import noteService from '../services/noteService.js';
import eventBus from '../../../services/eventBusService.js'


export default function NotePinBtn(props) {
    return (
        <button className="pin-btn" onClick={() => {
            noteService.togglePinNote(props.note.id);
            eventBus.emit('togglePin', {isPinned:false})
        }} >{props.note.isPinned && <img className="pinned-img" src="./apps/notes/assets/img/pin.png"/>}{!props.note.isPinned && <img className="unpinned-img" src="./apps/notes/assets/img/pin.png" />}</button>
    )
}