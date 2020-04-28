import emailService from '../services/emailService.js';
import LongTxt from '../../../cmps/LongTxt.jsx';
import eventBus from '../../../services/eventBusService.js';

export default function EmailPreview({ email }) {
    return (
        <article className={`email-preview flex align-center ${email.isRead ? '' : 'bold'}`} >
            <button onClick={() => {
                emailService.removeEmail(email.id)
                    .then(() => {
                        eventBus.emit('emails-changed', null)
                    });
            }} className="del-btn">🗑️</button>

            <button onClick={() => {
                emailService.toggleAtt(email.id, 'isStarred')
                    .then(() => {
                        console.log('star toggled!')
                        eventBus.emit('emails-changed', null)
                    });
            }} className="star-btn">⭐</button>

            <button onClick={() => {
                emailService.toggleAtt(email.id, 'isRead')
                    .then(() => {
                        console.log('Read toggled!')
                        eventBus.emit('emails-changed', null)
                    });
            }} className="toggle-read-btn">✉️</button>

            <p className="email-from">{email.from}</p>
            <p className="email-subj">{email.subject}</p>
            <LongTxt length={50} txt={email.body} />
        </article >
    )
}