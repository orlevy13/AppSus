export default function GoogleBookPreview(props) {
    return (
        <article className="book-preview flex column align-center">
            <div>
                <h1>{props.book.volumeInfo.title.substring(0, 20)}</h1>
            </div>
            {props.book.volumeInfo.imageLinks && <img className="book-img" src={props.book.volumeInfo.imageLinks.thumbnail}></img>}
            {!props.book.volumeInfo.imageLinks && <img className="book-img" src="../assets/img/notfound.png"></img>}
            <button onClick={() => props.onAddGoogleBook(props.book)}>Add to my Books</button>
        </article>
    )
}


