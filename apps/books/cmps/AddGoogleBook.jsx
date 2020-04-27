import bookService from '../services/bookService.js';
import GoogleBookList from './GoogleBookList.jsx'

export default class AddGoogleBook extends React.Component {
    state = {
        foundBooks: []
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

                <div><input type="text"
                    onChange={this.handleChange}
                    placeholder="Search Book from Google API" />
                </div>

                {foundBooks !== [] &&
                    <GoogleBookList foundBooks={foundBooks} />}

            </section>
        )
    }
}