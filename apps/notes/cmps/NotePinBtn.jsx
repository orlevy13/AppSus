import noteService from '../services/noteService.js';
import eventBus from '../../../services/eventBusService.js'


export default function NotePinBtn(props) {
    return (
        <React.Fragment>
            {props.note.isPinned && <button className="pinned-btn" onClick={() => {
                noteService.togglePinNote(props.note.id);
                eventBus.emit('togglePin', { isPinned: false })
            }} >
                <img className="pinned-img" src="./apps/notes/assets/img/pin.png" />

        </button>}
        {!props.note.isPinned && <button className="unpinned-btn" onClick={() => {
                noteService.togglePinNote(props.note.id);
                eventBus.emit('togglePin', { isPinned: true })
            }} ><img className="unpinned-img" src="./apps/notes/assets/img/pin.png" />
        </button>}
        </React.Fragment>
    )
}