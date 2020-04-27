import EmailPreview from './EmailPreview.jsx';

export default function EmailList(props) {
    const { emails } = props
    return (
        <section>
            <h1>Email list</h1>
            {
                emails.map(email => <EmailPreview key={email.id} email={email} />)
            }
        </section>
        // Map of email previews EmailPreview
        // <EmailPreview></EmailPreview>
    )
}