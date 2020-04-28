import SideBar from '../cmps/SideBar.jsx';
import EmailList from '../cmps/EmailList.jsx';
import emailService from '../services/emailService.js';
import eventBus from '../../../services/eventBusService.js';

export default class Starred extends React.Component {

    state = {
        emails: null,
        emailsToDisplay: null,
        filterBy: ''
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

    onChangeFilter = ({ target }) => {
        const filterBy = target.value;
        const emailsToDisplay = this.getFiltered(filterBy);
        this.setState({ emailsToDisplay, filterBy });
    }

    getFiltered = (filterBy) => {
        if (filterBy === 'read') {
            return this.state.emails.filter(email => email.isRead)
        } else if (filterBy === 'unread') {
            return this.state.emails.filter(email => !email.isRead)
        } else return this.state.emails;
    }

    onChangeSort = ({ target }) => {
        const sortBy = target.value;
        var emails = this.state.emailsToDisplay || this.state.emails;

        if (sortBy === 'subject') {
            emails = emails.sort((email1, email2) => {
                return email1.subject.localeCompare(email2.subject)
            })

        } else if (sortBy === 'date') {
            emails = emails.sort((email1, email2) => {
                return email2.sentAt - email1.sentAt;
            })
        }
        this.setState({ emailsToDisplay: emails })
    }

    render() {
        const { emails, emailsToDisplay } = this.state;
        return (
            <section className="starred-page flex">
                <SideBar></SideBar>
                <div className="email-list">
                    <select className="email-filter" onChange={this.onChangeFilter}>
                        <option value="all">All</option>
                        <option value="read">Read</option>
                        <option value="unread">Unread</option>
                    </select>
                    <select className="email-sort" onChange={this.onChangeSort}>
                        <option value="">Sort</option>
                        <option value="subject">By subject</option>
                        <option value="date">By date</option>
                    </select>
                    {emails && <EmailList emails={emailsToDisplay || emails} />}
                </div>
            </section>
        )
    }
}