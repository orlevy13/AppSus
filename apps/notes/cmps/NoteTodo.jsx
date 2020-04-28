import NotePinBtn from '../cmps/NotePinBtn.jsx'


export default function NoteTodo(props) {
	return (
		<article className="note-preview ">
			<p>{props.note.txt}</p>
			<NotePinBtn note={props.note} />
		</article>
	);
}
