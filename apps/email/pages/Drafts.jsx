import SideBar from '../cmps/SideBar.jsx';
import EmailList from '../cmps/EmailList.jsx';
import emailService from '../services/emailService.js';

export default function Drafts() {
    return (
        <section className="drafts-page flex">
            <SideBar></SideBar>
            <div className="email-list">
                <EmailList emails={emailService.getEmails('drafts')}></EmailList>
            </div>
        </section>
    )
}