import SideBar from '../cmps/SideBar.jsx';
import emailService from '../services/emailService.js';


export default class EmailDetails extends React.Component {

    state = {
        email: null
    }

    componentDidMount() {
        const id = this.props.match.params.emailId
        emailService.markAsRead(id)
            .then(() => {
                console.log('Marked as read!')
            });

        emailService.getById(id)
            .then(email => {
                this.setState({ email })
            })
    }

    render() {
        if (!this.state.email) return <p>Loading..</p>;

        const { subject, from, body, sentAt } = this.state.email
        return (

            <section className="email-details-page">
                <SideBar></SideBar>
                <section className="email-details">
                    <div className="email-header">
                        <h2>{subject}</h2>
                        <div className="flex space-between">
                            <p>From: {from}</p>
                            <div>
                                <p> {new Date(sentAt).toLocaleDateString("en-US")}</p>
                            </div>
                        </div>
                    </div>
                    <p className="email-details-body">
                        {body}
                    </p>
                </section>
            </section>
        )
    }
}