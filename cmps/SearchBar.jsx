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
        const placeholderTxt = (this.state.currApp === 'email') ? 'Search email..' :
            'Search a note..'
        const { currApp } = this.state;
        return (
            <div className="main-search">
                {(currApp === 'email' || currApp === 'notes') &&
                    <input onChange={this.handleChange} placeholder={placeholderTxt} type="search" />}
            </div>
        )

    }

}