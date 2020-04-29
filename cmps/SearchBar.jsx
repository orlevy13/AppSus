import eventBus from "../services/eventBusService.js";
import noteService from "../apps/notes/services/noteService.js";


export default class SearchBar extends React.Component {

    state = {
        currApp: ''
    }

    componentDidMount() {
        eventBus.on('set-page', (data) => {
            console.log('data', data)
            this.setState({ currApp: data.app })
        })
    }

    handleChange = ({ target }) => {
        const { currApp } = this.state
        if (currApp === 'notes') {
            eventBus.emit('search-note', { filter: target.value })
        }
        if (currApp === 'email') {
            eventBus.emit('search-email', { filter: target.value })
        }
    }

    render() {

        // { currApp } = this.state;
        // switch (note.type) {
        //     case "NoteTxt":
        //         return <NoteTxt note={note} />
        //     case "NoteImg":
        //         return <NoteImg note={note} />
        //     case "NoteVid":
        //         return <NoteVid note={note} />
        //     case "NoteTodo":
        //         return <NoteTodo note={note} />
        // }

        return (
            <div>
                <input onChange={this.handleChange} placeholder="blabla" type="search" />
            </div>
        )
    }

}