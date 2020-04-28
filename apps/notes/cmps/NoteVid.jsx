import NotePinBtn from '../cmps/NotePinBtn.jsx';
import NoteDelete from '../cmps/NoteDelete.jsx';

export default function NoteVid(props) {
    return (
        <article className="note-preview ">
            <div>
                <iframe width="100%" src={props.note.info.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <NotePinBtn note={props.note} />
            <NoteDelete note={props.note} />
        </article>
    )
}

