import LongTxt from '../cmps/LongTxt.jsx';
import ReviewAdd from '../cmps/ReviewAdd.jsx';
import ReviewList from '../cmps/ReviewList.jsx'
import eventBus from '../../../services/eventBusService.js';
import bookService from '../services/bookService.js';

const { Link } = ReactRouterDOM

export default class BookDetails extends React.Component {
    state = {
        book: null,
        readLength: '',
        bookAge: '',
        className: '',
        saleImg: ''
    }

    componentDidUpdate(prevProps) {  /// ****** to 
        if (prevProps.match.params.bookid !== this.props.match.params.bookid) {
            this.loadBook();
        }
    }

    componentDidMount() {
        this.loadBook();
    }

    loadBook() {
        const id = this.props.match.params.bookid
        bookService.getById(id)
            .then(book => {
                bookService.getNextPrevBooks(book.id)
                    .then(nextPrevObj => {
                        this.prevNext = nextPrevObj
                        this.setState({ book })
                    })
            })
    }

    deleteReview = (reviewid) => {
        console.log('review id', reviewid);
        console.log(this.state.book)
        bookService.removeReview(this.state.book.id, reviewid)
            .then((book) => {
                this.setState({ book })
                console.log('review removed');
            })
            .catch((err) => console.log(err))
        eventBus.emit('book-details', { action: 'err' })
    }

    addReview = (bookid, review) => {
        bookService.addReview(bookid, review)
            .then((book) => {
                this.setState({ book })

            })
            .catch(err => console.log(err));
        eventBus.emit('book-details', { action: 'err' })
    }

    render() {
        const { book } = this.state;

        const Loading = <p>Loading...</p>
        if (!book) return (Loading);

        let readLength = '';
        if (book.pageCount > 500) readLength = 'Long Reading';
        else if (book.pageCount > 200) readLength = 'Decent Reading'
        else readLength = 'Light Reading'

        var currentYear = new Date().getFullYear();
        var bookAge = ''
        if (currentYear - book.publishedDate > 10) bookAge = 'Vetran Book';
        else if (currentYear - book.publishedDate < 1) bookAge = 'New!'
        else bookAge = book.publishedDate;

        var className = (book.listPrice.amount) > 150 ? "red" : "green";

        var saleImg = (book.listPrice.isOnSale) ? "../assets/img/sale.png" : "../assets/img/notSale.jpg";
        var currencySymbol = bookService.getCurrencySymbol(book.listPrice.currencyCode);

        return (<section className="book-details flex wrap column justify-center align-center">


            <div className="prev-next flex space-between">
                <Link to={`/book/${this.prevNext.prev}`}> Prev </Link>
                <button onClick={() => { this.props.history.goBack() }}>Back</button>
                <Link to={`/book/${this.prevNext.next}`}> Next </Link>
            </div>

            <div className="book-cover flex column justify-center align-center">
                <h1>{book.title}</h1>
                <h5>{book.subtitle}</h5>
                {book.listPrice.isOnSale && <img className="sale" src={saleImg} />}
                {book.listPrice.isOnSale && <p>This book is on Sale right now!</p>}
                <img src={book.thumbnail} />
            </div>
            <div className="description flex column justify-center">
                <p>Description:</p>
                <LongTxt text={book.description} length={100} />
            </div>
            <div className="price">
                <h2>Price: <span className={className}>{book.listPrice.amount} {currencySymbol}</span></h2>
            </div>
            <div className="details flex column">
                <p>Id: {book.id}</p>
                <p>Title: {book.title}</p>
                <p>More about: {book.subtitle}</p>
                <p>The Authors: {book.authors}</p>
                <p>Published At: {bookAge}</p>
                <p>How Many Pages: {readLength}</p>
                <p>Language: {book.language}</p>
                <p>Categories and Tags: {book.categories}</p>
            </div>

            {book.reviews && <ReviewList reviews={book.reviews} ondeleteReview={this.deleteReview} />}
            <ReviewAdd bookid={book.id} onAddReview={this.addReview} />
        </section>)
    }
}