import noteService from '../services/noteService.js';
import eventBus from '../../../services/eventBusService.js'
import NotePinBtn from '../cmps/NotePinBtn.jsx'


export default function NoteTxt(props) {
    return (
        <article className="notes-preview ">

            <p>{props.note.txt}</p>
            {props.note.isPinned && <NotePinBtn innerText={'UnPin'} />}
            {!props.note.isPinned && <NotePinBtn innerText={'Pin'} />}
        </article>
    )
}





