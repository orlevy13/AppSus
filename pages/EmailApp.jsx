import SideBar from '../apps/email/cmps/SideBar.jsx';
import EmailList from '../apps/email/cmps/EmailList.jsx';
import emailService from '../apps/email/services/emailService.js';
import eventBus from '../services/eventBusService.js';

export default class EmailApp extends React.Component {

    state = {
        emails: null
    }

    componentDidMount() {
        this.loadEmails();
        eventBus.on('emails-changed', () => this.loadEmails());
    }

    loadEmails = () => {
        emailService.query()
            .then((emails) => this.setState({ emails }))
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        const { emails } = this.state;
        return (
            <section className="inbox-page flex">
                <SideBar />
                <div className="email-list">
                    {emails && <EmailList emails={emailService.getEmails('all')} />}
                </div>
            </section>
        )
    }
}