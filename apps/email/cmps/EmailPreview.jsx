export default function EmailPreview({ email }) {
    return (
        <article className="email-preview flex align-center">
            <h4 className="email-subj">{email.subject}</h4>
            <p className="email-body">{email.body}</p>
        </article>
    )
}