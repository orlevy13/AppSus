
import ReviewPreview from 'ReviewPreview.jsx';
export default function ReviewList(props) {

    return (
        <section className="reviews-list">
            {props.reviews.map(review => <ReviewPreview key={review.id} review={review} onDeleteReview={() => { props.ondeleteReview(review.id) }} />)}
        </section>

    )
}



