const { Link } = ReactRouterDOM
import BookService from '../services/bookService.js'
export default function BookPreview(props) {
    const { book } = props;


    return (
        <Link to={`/book/${book.id}`} className="book-preview flex column align-center">
            <article >
                <div>
                    <h1>{book.title}</h1>
                </div>
                <img src={book.thumbnail}></img>
                <p>price: {book.listPrice.amount} {BookService.getCurrencySymbol(book.listPrice.currencyCode)}</p>
            </article>
        </Link>
    )

}  