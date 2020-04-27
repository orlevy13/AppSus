import SideBar from '../apps/email/cmps/SideBar.jsx';
import EmailList from '../apps/email/cmps/EmailList.jsx';
import emailService from '../apps/email/services/emailService.js';

export default class EmailApp extends React.Component {


    render() {
        return (
            <section className="inbox-page flex">
                <SideBar></SideBar>
                <div className="email-list">
                    <EmailList emails={emailService.getEmails('all')}></EmailList>
                </div>
            </section>
        )
    }
}