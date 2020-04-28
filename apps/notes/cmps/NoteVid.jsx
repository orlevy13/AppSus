import NotePinBtn from '../cmps/NotePinBtn.jsx';
import NoteDelete from '../cmps/NoteDelete.jsx';

export default function NoteVid(props) {
    return (
        <article className="note-preview ">
            <NotePinBtn note={props.note} />
            <div className="margin" >
                <iframe width="100%" src={props.note.info.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <NoteDelete note={props.note} />
        </article>
    )
}

