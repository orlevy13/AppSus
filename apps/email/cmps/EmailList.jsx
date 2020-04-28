import EmailPreview from './EmailPreview.jsx';

export default function EmailList(props) {
    const { emails } = props
    return (
        <section className="emails-container">
            {emails.map(email => <EmailPreview key={email.id} email={email} />)}
        </section>
    )
}