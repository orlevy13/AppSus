import SideBar from '../cmps/SideBar.jsx';
import EmailList from '../cmps/EmailList.jsx';
import emailService from '../services/emailService.js';
import eventBus from '../../../services/eventBusService.js';

export default class Starred extends React.Component {

    state = {
        emails: null
    }

    componentDidMount() {
        this.loadEmails();
        eventBus.on('emails-changed', () => this.loadEmails());
    }

    loadEmails = () => {
        emailService.query('starred')
            .then((emails) => this.setState({ emails }))
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        const { emails } = this.state;
        return (
            <section className="starred-page flex">
                <SideBar></SideBar>
                <div className="email-list">
                    {emails && <EmailList emails={emails} />}
                </div>
            </section>
        )
    }
}