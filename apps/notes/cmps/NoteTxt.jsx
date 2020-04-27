import noteService from '../services/noteService.js';


export default function NoteTxt(props) {
    return (
        <article className="notes-preview ">

            <p>{props.note.txt}</p>
            {props.note.isPinned && <button onClick={() => {
                noteService.togglePinNote(props.note.id);
            }} >UnPin</button>}
            {!props.note.isPinned && <button onClick={() => {
                noteService.togglePinNote(props.note.id);
            }} >Pin</button>}
        </article>
    )
}