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

{/* <video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video> */}
