import BookService from '../services/bookService.js';
import BooksList from '../cmps/BooksList.jsx';
import BookFilter from '../cmps/BooksFilter.jsx';
import eventBus from '../../../services/eventBusService.js';
import NavBar from '../cmps/NavBar.jsx';


export default class BookApp extends React.Component {

    state = {
        books: [],
        filterBy: null,
        selectedBook: null
    }

    componentDidMount() {
        this.loadBooks();
    }
    loadBooks() {
        BookService.query(this.state.filterBy)
            .then((books) => this.setState({ books }))
            .catch((err) => {
                console.log(err);
                eventBus.emit('book-details', { book, action: 'err' })
            })

    }

    selectBook = (id) => {
        const selectedBook = this.state.books.find((book) => book.id === id);
        this.setState(
            { selectedBook }
        )
    }
    unSelectBook = () => {
        this.setState({ selectedBook: null })
    }

    onSetFilter = (filterBy) => {
        console.log(filterBy);
        this.setState({ filterBy }, () => this.loadBooks());
    }


    render() {
        const { books, selectedBook } = this.state;
        return (

            <section className="book-app flex column align-center">
                <NavBar></NavBar>
                {!selectedBook && <BookFilter onSetFilter={this.onSetFilter} />}
                {!selectedBook && <BooksList books={books} onSelectBook={this.selectBook}></BooksList>}

            </section>
        )
    }
}