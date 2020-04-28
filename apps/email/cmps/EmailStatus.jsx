import emailService from '../services/emailService.js';
import eventBus from '../../../services/eventBusService.js';

export default class EmailStatus extends React.Component {

    state = {
        unreadCount: ''
    }

    componentDidMount() {
        this.loadUnread();
        eventBus.on('emails-changed', () => this.loadUnread());
    }

    loadUnread = () => {
        emailService.getUnreadCount()
            .then(count => { this.setState({ unreadCount: count }) });
    }

    render() {
        const { unreadCount } = this.state;
        if (!unreadCount) return null;
        return (
            <span className="unread-count">{unreadCount}</span>
        )
    }
}