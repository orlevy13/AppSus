import emailService from '../services/emailService.js';
import LongTxt from '../../../cmps/LongTxt.jsx';
import eventBus from '../../../services/eventBusService.js';
const { Link } = ReactRouterDOM;

export default function EmailPreview({ email }) {
    var starImgSrc = email.isStarred ? "./apps/email/assets/imgs/starred.png" :
        "./apps/email/assets/imgs/star.png";

    var envelopeImgSrc = email.isRead ? "./apps/email/assets/imgs/open-mail.png" :
        "./apps/email/assets/imgs/close-mail.png";

    var deleteImgSrc = "./apps/email/assets/imgs/bin.png";

    return (

        <Link to={`/email/details/${email.id}`}>
            <article className={`email-preview flex align-center ${email.isRead ? '' : 'bold'}`} >
                <button title="Delete" onClick={(ev) => {
                    ev.preventDefault();
                    emailService.removeEmail(email.id)
                        .then(() => {
                            eventBus.emit('emails-changed', null)
                        });
                }} className="del-btn"><img height="15" src={deleteImgSrc} /></button>

                <button title="Star" onClick={(ev) => {
                    ev.preventDefault();
                    emailService.toggleAtt(email.id, 'isStarred')
                        .then(() => {
                            console.log('star toggled!')
                            eventBus.emit('emails-changed', null)
                        });
                }} className="star-btn">
                    <img height="15" src={starImgSrc} />
                </button>

                <button title="Read/Unread" onClick={(ev) => {
                    ev.preventDefault();
                    emailService.toggleAtt(email.id, 'isRead')
                        .then(() => {
                            console.log('Read toggled!')
                            eventBus.emit('emails-changed', null)
                        });
                }} className="toggle-read-btn"><img height="15" src={envelopeImgSrc} /></button>

                <p className="email-from">{email.from}</p>
                <p className="email-subj">{email.subject}- </p>
                <div className="email-body">
                    <LongTxt length={50} txt={email.body} />
                </div>
            </article >
        </Link>
    )
}