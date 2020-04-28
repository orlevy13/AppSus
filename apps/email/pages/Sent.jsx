import SideBar from '../cmps/SideBar.jsx';
import EmailList from '../cmps/EmailList.jsx';
import emailService from '../services/emailService.js';

export default class Sent extends React.Component {

    state = {
        emails: null
    }

    componentDidMount() {
        this.loadEmails()
    }

    loadEmails = () => {
        emailService.query('sent')
            .then((emails) => this.setState({ emails }))
            .catch((err) => {
                console.log(err);
            })
    }
    render() {
        const { emails } = this.state;
        return (
            <section className="sent-page flex">
                <SideBar></SideBar>
                <div className="email-list">
                    {emails && <EmailList emails={emails} />}
                </div>
            </section>
        )
    }
}