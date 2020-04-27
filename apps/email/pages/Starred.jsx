import SideBar from '../cmps/SideBar.jsx';
import EmailList from '../cmps/EmailList.jsx';
import emailService from '../services/emailService.js';

export default function Starred() {
    return (
        <section className="starred-page flex">
            <SideBar></SideBar>
            <div className="email-list">
                <EmailList emails={emailService.getEmails('starred')}></EmailList>
            </div>
        </section>
    )
}