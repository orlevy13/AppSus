import emailService from '../services/emailService.js';
import LongTxt from '../../../cmps/LongTxt.jsx';

export default function EmailPreview({ email }) {
    return (
        <article className="email-preview flex align-center">
            <button onClick={() => { emailService.removeEmail(email.id) }} className="del-btn">🗑️</button>
            <h4 className="email-from">{email.from}</h4>
            <h4 className="email-subj">{email.subject}</h4>
            <LongTxt length={50} txt={email.body} />
        </article>
    )
}