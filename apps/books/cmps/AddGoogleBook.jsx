import bookService from '../services/bookService.js';
import GoogleBookList from './GoogleBookList.jsx'

export default class AddGoogleBook extends React.Component {
    state = {
        foundBooks: [],
        isAddBookOpen: false
    }

    toggleAddBook = () => {
        this.setState(prevState => ({ isAddBookOpen: !prevState.isAddBookOpen }));
    }

    handleChange = ({ target }) => {
        let value = target.value;
        bookService.getBooksFromApi(value)
            .then(res => {
                this.setState({ foundBooks: res })
                
            })
    }

    render() {
        const { foundBooks } = this.state
        return (
            <section className="add-book-container">

                <button onClick={this.toggleAddBook}>Add Book from Google</button>

                {this.state.isAddBookOpen &&
                    <div><input type="text"
                        onChange={this.handleChange}
                        placeholder="Search Book from Google API" />
                    </div>}
                {foundBooks !== [] &&
                    <GoogleBookList foundBooks={foundBooks} />}

            </section>
        )
    }
}