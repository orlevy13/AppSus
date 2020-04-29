import eventBus from "../services/eventBusService.js";
import noteService from "../apps/notes/services/noteService.js";


export default class SearchBar extends React.Component {

    state = {
        currApp: ''
    }

    componentDidMount() {
        eventBus.on('set-page', (data) => {
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
        if (this.state.currApp !== 'email' && this.state.currApp !== 'notes') return null;
        const placeholderTxt = (this.state.currApp === 'email') ? 'Search email..' :
            'Search a note..'

        return (
            <div className="main-search">
                <input onChange={this.handleChange} placeholder={placeholderTxt} type="search" />
            </div>
        )

    }

}