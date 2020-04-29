import SideBar from '../cmps/SideBar.jsx';
import EmailList from '../cmps/EmailList.jsx';
import emailService from '../services/emailService.js';
import eventBus from '../../../services/eventBusService.js';

export default class Sent extends React.Component {

    state = {
        emails: null,
        filteredEmails: null,
        filterBy: '',
        searchFor: ''
    }

    componentDidMount() {
        this.loadEmails();
        eventBus.on('emails-changed', () => this.loadEmails());
        eventBus.emit('set-page', { app: 'email' });

        eventBus.on('search-email', (data) => {
            this.setState({ searchFor: data.filter })
        })
    }

    loadEmails = () => {
        emailService.query('sent')
            .then((emails) => this.setState({ emails }))
            .catch((err) => {
                console.log(err);
            })
    }

    onChangeFilter = ({ target }) => {
        const filterBy = target.value;
        const filteredEmails = this.getFiltered(filterBy);
        this.setState({ filteredEmails, filterBy });
    }

    getFiltered = (filterBy) => {
        if (filterBy === 'read') {
            return this.state.emails.filter(email => email.isRead)
        } else if (filterBy === 'unread') {
            return this.state.emails.filter(email => !email.isRead)
        } else return this.state.emails;
    }

    onChangeSort = ({ target }) => {
        const { filteredEmails, emails } = this.state;
        const sortBy = target.value;
        var sortedEmails = filteredEmails || emails;

        if (sortBy === 'subject') {
            sortedEmails = sortedEmails.sort((email1, email2) => {
                return email1.subject.localeCompare(email2.subject)
            })

        } else if (sortBy === 'date') {
            sortedEmails = sortedEmails.sort((email1, email2) => {
                return email2.sentAt - email1.sentAt;
            })
        }
        this.setState({ filteredEmails: sortedEmails })
    }

    render() {
        const { emails, filteredEmails, searchFor } = this.state;
        var emailsToDisplay;

        if (!searchFor) emailsToDisplay = filteredEmails || emails;
        else {
            emailsToDisplay = (filteredEmails || emails).filter(email => {
                return email.subject.toLowerCase().includes(searchFor.toLowerCase()) ||
                    email.body.toLowerCase().includes(searchFor.toLowerCase())
            })
        }

        return (
            <section className="sent-page flex">
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
                    {emails && <EmailList emails={emailsToDisplay} />}
                    {/* {emails && <EmailList emails={emailsToDisplay|| emails} />} */}
                </div>
            </section>
        )
    }
}