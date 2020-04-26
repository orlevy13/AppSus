import BooksPreview from './BooksPreview.jsx';

export default function BookList(props) {

    return (
        <section className="books-list flex wrap justify-center align-center">
            {props.books.map(book => <BooksPreview key={book.id} book={book} onSelectBook={props.onSelectBook} />)}
        </section>

    )

}