import BookService from '../apps/books/services/bookService.js';
import BooksList from '../apps/books/cmps/BooksList.jsx';
import BookFilter from '../apps/books/cmps/BooksFilter.jsx';
import eventBus from '../services/eventBusService.js';
import NavBar from '../apps/books/cmps/NavBar.jsx';


export default class BookApp extends React.Component {

    state = {
        books: [],
        filterBy: null
    }

    componentDidMount() {
        this.loadBooks();
        eventBus.emit('set-page', { app: 'book' });
    }
    loadBooks() {
        BookService.query(this.state.filterBy)
            .then((books) => this.setState({ books }))
            .catch((err) => {
                console.log(err);
                eventBus.emit('book-details', { book, action: 'err' })
            })

    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => this.loadBooks());
    }

    render() {
        const { books } = this.state;
        
        return (
            <section className="book-app flex column align-center">
                <NavBar></NavBar>
                <BookFilter onSetFilter={this.onSetFilter} />
                <BooksList books={books} onSelectBook={this.selectBook}></BooksList>
            </section>
        )
    }
}