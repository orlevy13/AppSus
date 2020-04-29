import NotePinBtn from '../cmps/NotePinBtn.jsx'
import NoteDelete from '../cmps/NoteDelete.jsx';
import noteService from '../apps/notes/services/noteService.js';


export default class NoteTodo extends React.Component {
	state = {
		txt: ''
	}

	handleChange = ({ target }) => {
		const value = target.value;
		this.setState({txt:value})
	}

	onAddTodo = (txt, noteId) => {
		noteService.addTodo(txt,noteId)
			.then((todo) => this.loadTodos());
	}

	loadTodos = () => {
		noteService.query()
            .then(() => this.setState({ txt:'' }))
            .catch((err) => {
                console.log(err);
            })
	}

	toggleIsDone = (todoId , noteId) => {
		noteService.toggleIsDone(todoId , noteId )
			.then((todo) => this.loadTodos());
	}

	render() {
		const { txt } = this.state;
		if (!this.props.note.info) return <p>'Loading...'</p>
		return ( 
			<article className="note-preview ">
				<NotePinBtn note={this.props.note} />
				<h4>{this.props.note.info.label}:</h4>
				<div className="margin" >
				{this.props.note.info.todos.map((todo) => <p className={(todo.isDone)?'todo-done':''} key={todo.id} onClick={()=>{this.toggleIsDone(todo.id , this.props.note.id)}}>{todo.txt}</p>)}
				</div>
					<div className="flex align-center justify-center"><input className="add-todo-input" type="text" name="addTodo" value={txt} onChange={this.handleChange} />
					<button onClick={()=>{this.onAddTodo(txt,this.props.note.id)}}><img className="add-todo-img" src="./apps/notes/assets/img/plus.png"/></button>
					<NoteDelete note={this.props.note} />
				</div>
			</article>
		);
	}
}