import eventBus from '../services/eventBusService.js'

export default class UserMsg extends React.Component {

    state = {
        msg: null,
        book: null
    }

    componentDidMount() {
        this.unsubscribeFromEventBus1 = eventBus.on('book-added', (data) => this.setMsg(data))
        this.unsubscribeFromEventBus2 = eventBus.on('book-details', (data) => this.setMsg(data))
    }

    componentWillUnmount() {
        this.unsubscribeFromEventBus1();
        this.unsubscribeFromEventBus2();
    }

    setMsg = (data) => {
        const action = data.action
        const book = data.book
        if (action === 'add') {
            this.setState({ msg: 'Your book was added :)', book })
            setTimeout(() => {
                this.setState({ msg: null, book: null })
            }, 4000);
        }
        else if (action === 'review') {
                this.setState({ msg: 'Your review was added :)' })
                setTimeout(() => {
                    this.setState({ msg: null })
                }, 4000);
            }
        else if (action === 'err') {
                this.setState({ msg: 'Somthing Happend :(' })
                setTimeout(() => {
                    this.setState({ msg: null, book: null })
                }, 4000);
            }
    }

    render() {
        const { msg } = this.state
        return (
            (!msg) ? '' : <section className="user-msg">
                <h3>Success!</h3>
                <button onClick={() => {
                    this.setState({ msg: null })
                }}>Close</button>
                <p>{msg}</p>
                {(!this.state.book) ? '' : <a onClick={() => { this.setState({ msg: null }) }} href={`/#/book/${this.state.book.id}`}>Check it Out</a>}
            </section>
        )
    }
} 