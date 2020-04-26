import eventBus from '../../../services/eventBusService.js';

export default class ReviewAdd extends React.Component {

    state = {
        review: {
            fullName: '',
            rate: '',
            readAt: '',
            reviewTxt: ''
        }

    }


    handleInput = ({ target }) => {

        const field = target.name
        const value = (target.type === 'number') ? +target.value : target.value
        console.log('field', field);
        console.log('value', value);
        this.setState(prevState => {
            return {
                review: {
                    ...prevState.review,
                    [field]: value
                }
            }
        })
    }


    onAddReview = (ev) => {
        ev.preventDefault()
        const id = this.props.bookid;
        const review = { ...this.state.review }
        this.props.onAddReview(id, review);
        eventBus.emit('book-details', { action: 'review' })
        this.setState({
            review: {
                fullName: '',
                rate: '',
                readAt: '',
                reviewTxt: ''
            }
        }
        )
    }


    render() {
        const { fullName, rate, readAt, reviewTxt } = this.state.review;
        return (
            <div className="review-add flex column align-center" >

                <h2>Add Your review:</h2>
                <form className="flex column align-center" onSubmit={this.onAddReview}>
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" value={fullName} name="fullName" onChange={this.handleInput} />
                    <label htmlFor="rate">Rate:</label>
                    <select value={rate} name="rate" onChange={this.handleInput}>
                        <option key="1">1</option>
                        <option key="2">2</option>
                        <option key="3">3</option>
                        <option key="4">4</option>
                        <option key="5">5</option>
                    </select>
                    <label htmlFor="readAt">Read At:</label>
                    <input type="date" name="readAt" value={readAt} onChange={this.handleInput} />
                    <label htmlFor="reviewTxt">Review:</label>
                    <textarea name="reviewTxt" value={reviewTxt} onChange={this.handleInput} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}