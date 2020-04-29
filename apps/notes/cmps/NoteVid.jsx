import NotePinBtn from '../cmps/NotePinBtn.jsx';
import NoteDelete from '../cmps/NoteDelete.jsx';

export default function NoteVid(props) {
    return (
        <article className="note-preview ">
            <NotePinBtn note={props.note} />
            <div className="margin" >
                <iframe width="100%" src={props.note.info.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <NoteDelete note={props.note} />
        </article>
    )
}

