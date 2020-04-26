import GoogleBookPreview from 'GoogleBookPreview.jsx'

// export default function GoogleBookList(props) {  // Just Trying Something else Here:

const GoogleBookList = (props) => (
    <section className="books-list flex wrap justify-center align-center">
            {props.foundBooks.map(book => 
            <GoogleBookPreview onAddGoogleBook={props.onAddGoogleBook} key={ book.id } book={ book } />) }
        </section>
);

export default GoogleBookList;  //It Worked :) 