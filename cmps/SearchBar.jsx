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
        console.log('this.state.currApp', this.state.currApp)
        if (this.state.currApp !== 'email' && this.state.currApp !== 'notes') return null;
        return (
            <div>
                <input onChange={this.handleChange} placeholder="blabla" type="search" />
            </div>
        )

    }

}