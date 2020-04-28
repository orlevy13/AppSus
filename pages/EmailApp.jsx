import SideBar from '../apps/email/cmps/SideBar.jsx';
import EmailList from '../apps/email/cmps/EmailList.jsx';
import emailService from '../apps/email/services/emailService.js';
import eventBus from '../services/eventBusService.js';

export default class EmailApp extends React.Component {

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
        emailService.query('all')
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

    // setFilter = ({ target }) => {
    //     console.log('setting filter!target.value:', target.value)
    //     this.setState({ filterBy: target.value });
    //     this.setEmailsToDisplay();
    // }

    // setEmailsToDisplay = () => {
    //     const emailsToDisplay = this.getFiltered();
    //     console.log('emailsToDisplay', emailsToDisplay)
    //     this.setState({ emailsToDisplay });
    // }

    getFiltered = (filterBy) => {
        if (filterBy === 'read') {
            return this.state.emails.filter(email => email.isRead)
        } else if (filterBy === 'unread') {
            return this.state.emails.filter(email => !email.isRead)
        } else return this.state.emails;
    }

    render() {
        const { emails, emailsToDisplay } = this.state;
        return (
            <section className="inbox-page flex">
                <SideBar />
                <div className="email-list">
                    <select className="email-filter" onChange={this.onChangeFilter}>
                        <option value="all">All</option>
                        <option value="read">Read</option>
                        <option value="unread">Unread</option>
                    </select>
                    {emails && <EmailList emails={emailsToDisplay || emails} />}
                    {/* {emails && <EmailList onChangeFilter={this.onChangeFilter} emails={emailsToDisplay || emails} />} */}
                </div>
            </section>
        )
    }
}