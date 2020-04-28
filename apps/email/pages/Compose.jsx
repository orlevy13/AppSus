import SideBar from '../cmps/SideBar.jsx';
import emailService from '../services/emailService.js';


export default class Compose extends React.Component {

    state = {
        to: '',
        subject: '',
        body: ''
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value

        this.setState(prevState => ({ ...prevState, [field]: value }))
    }

    onAddEmail = (email) => {
        if (!email.to) return;
        emailService.addEmail(email)
            .then(() => {
                console.log('SUCCESS!')
                this.props.history.push("/email");
            })
    }

    render() {
        const { to, subject, body } = this.state;
        return (
            <section className="compose-page flex">
                <SideBar></SideBar>
                <div className="email-list">
                    <form className="compose-section flex column" onSubmit={(ev) => {
                        ev.preventDefault();
                        this.onAddEmail(this.state);
                    }}>
                        <input placeholder="To" className="to-input compose-input" onChange={this.handleChange} value={to} name="to" type="text" />
                        <input placeholder="Subject" className="subj-input compose-input" onChange={this.handleChange} type="text" value={subject} name="subject" />
                        <textarea placeholder="Body" rows="10" className="body-input compose-input" onChange={this.handleChange} type="text" value={body} name="body" />
                        <button className="send-btn" type="submit">Send</button>
                    </form>
                </div>
            </section>
        )
    }
}