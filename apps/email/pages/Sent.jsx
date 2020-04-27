import SideBar from '../cmps/SideBar.jsx';
import EmailList from '../cmps/EmailList.jsx';
import emailService from '../services/emailService.js';

export default function Sent() {
    return (
        <section className="compose-page flex">
            <SideBar></SideBar>
            <div className="email-list">
                <EmailList emails={emailService.getEmails('all')}></EmailList>
            </div>
        </section>
    )
}