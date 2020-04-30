import eventBus from '../services/eventBusService.js'

export default class NoteStyle extends React.Component {
    state = {
        backgroundColor: ''
    }
    render() {
        return (
            <label> 
                <img className="bgcolor" src="./apps/notes/assets/img/bgcolor.png" />
                <input hidden type="color" onChange={(ev) => { eventBus.emit('changeBackground', { noteId: this.props.noteId, backgroundColor: ev.target.value }) }} />
            </label>
        )
    }
}
