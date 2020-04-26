import bookService from '../services/bookService.js';
import GoogleBookList from '../cmps/GoogleBookList.jsx';
import eventBus from '../../../services/eventBusService.js';
import utilService from '../../../services/utilService.js';
import NavBar from '../cmps/NavBar.jsx';

export default class BookAdd extends React.Component {

    constructor() {
        super();
        this.searchInput = React.createRef();
    }
    state = {
        googleBooks: null,
        search: {
            txt: ''
        }
    }

    componentDidMount() {
        this.searchInput.current.focus()
    }

    onSearchAPI = (text) => {
        bookService.getBooksFromApi(text)
            .then(googleBooks => {
                this.setState({ googleBooks })
            })
    }

    onAddGoogleBook = (book) => {
        bookService.getById(book.id)
            .then((foundBook) => {
                if (!foundBook) {

                    const newBook = this.modifyGoogleBook(book);

                    bookService.addGoogleBook(newBook)
                        .then((book) => {
                            eventBus.emit('book-added', { book, action: 'add' })
                        })
                }
                else eventBus.emit('book-added', { book: foundBook, action: 'add' })
            })
        eventBus.emit('book-added', { book, action: 'add' })
    }

    modifyGoogleBook(googleBook) {
        // Change from google-format to gBooks-format before sending to server...
        const info = googleBook.volumeInfo;
        const title = info.title;
        const authors = info.authors || []
        const publishedDate = info.publishedDate || ""
        const description = info.description || ""
        const pageCount = info.pageCount || ""
        const categories = info.categories || []
        const thumbnail = (info.imageLinks) ? info.imageLinks.thumbnail : "../assets/img/notfound.png"
        const language = info.language || ""
        const newGoogleBook = {
            "id": utilService.makeId(11),
            "title": title,
            "subtitle": "",
            "authors": authors,
            "publishedDate": publishedDate,
            "description": description || "",
            "pageCount": pageCount,
            "categories": categories,
            "thumbnail": thumbnail,
            "language": language,
            "listPrice": {
                "amount": utilService.getRandomInteger(10, 500),
                "currencyCode": "EUR",
                "isOnSale": false
            }
        }
        return newGoogleBook;
    }

    handleInput = ({ target }) => {
        const field = target.name
        const value = (target.type === 'number') ? parseInt(target.value) : target.value
        this.setState(prevState => ({ search: { ...prevState.search, [field]: value } }), () => {
            this.onSearchAPI(this.state.search.txt)
        })
    }

    render() {
        const { txt } = this.state.search
        return (
            <section className="book-add flex column justify-center">
                <NavBar></NavBar>
                <div className="search-input">
                    <label htmlFor="">Search Books From Google API: </label>
                </div>
                <div className="google-books-list flex wrap justify-center align-center">
                    <input className="search-book-input" type="text" placeholder="Search for any book you can think of..." name="txt" value={txt} onChange={this.handleInput} ref={this.searchInput}></input>
                </div>
                <div className="google-books-list flex wrap justify-center align-center">
                    {this.state.googleBooks && <GoogleBookList onAddGoogleBook={this.onAddGoogleBook} foundBooks={this.state.googleBooks} />}
                </div>
            </section >
        )
    }
}