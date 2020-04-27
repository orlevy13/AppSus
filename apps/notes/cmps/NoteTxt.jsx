import noteService from '../services/noteService.js';


export default class NoteTxt extends React.Component {

    state = {
        type: 'NoteTxt',
        txt: 'Fullstack Me Baby!'
    }

    handleChange = ({ target }) => {
        const txt = target.value;
        this.setState({ txt });
    }

    onAddNote = () => {
        noteService.addNote(this.state);
        this.props.noteAdded();
    }

    render() {
        const { txt } = this.state
        return (
            <div className="add-note">

                <input name="txt" value={txt} onChange={this.handleChange} type="text" placeholder="What's on your mind..." />

                <button onClick={() => {this.props.onChangeType('NoteImg')}}>IMG</button>

                <button onClick={() => {this.props.onChangeType('NoteTodos')}}>TODOS</button>

                <button onClick={() => {this.props.onChangeType('NoteVideo')}}>VIDEO</button>

                <button onClick={this.onAddNote}>add</button>
            </div>
        )
    }
}