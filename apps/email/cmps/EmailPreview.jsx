export default function EmailPreview({ email }) {
    return (
        <article className="email-preview">
            <h4>{email.subject}</h4>
            <p>{email.body}</p>
        </article>
    )
}

// { subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594 }