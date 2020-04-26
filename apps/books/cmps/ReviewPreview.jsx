
import LongTxt from 'LongTxt.jsx'
export default function ReviewPreview(props) {

    return (

        <section className="review-preview flex column align-left">
                <label>Full Name:</label>
                <p>{props.review.fullName}</p>
                <label>Rate:</label>
                <p>{props.review.rate}</p>
                <label>Read At:</label>
                <p>{props.review.readAt}</p>
                <label>Review:</label>
                <LongTxt text={props.review.reviewTxt} length={30}></LongTxt>
                <button onClick={() => props.onDeleteReview(props.review.id)}>delete</button>
        </section>
    )
}