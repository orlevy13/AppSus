import SideBar from '../cmps/SideBar.jsx';
import emailService from '../services/emailService.js';

export default class Compose extends React.Component {

    state = {
        subject: '',
        body: '',
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value

        this.setState(prevState => ({ ...prevState, [field]: value }), () => {
            console.log('state', this.state)
        })
    }

    onAddEmail = (email) => {
        emailService.addEmail(email);//TODO: add eventbus to render the emails list
    }

    render() {
        const { subject, body } = this.state;
        return (
            <section className="compose-page flex">
                <SideBar></SideBar>
                <div className="email-list">
                    <form onSubmit={() => {
                        this.onAddEmail(this.state)
                    }}>
                        <label>To:</label>
                        <input type="text" />
                        <label>Subject:</label>
                        <input onChange={this.handleChange} type="text" value={subject} name="subject" />
                        <label>Body:</label>
                        <input onChange={this.handleChange} type="text" value={body} name="body" />
                        <button type="submit">Add</button>
                    </form>
                </div>
            </section>
        )
    }
}