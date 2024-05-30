import { BookPreview } from "./BookPreview.jsx"
const { Link } = ReactRouterDOM


export function BookList({ books, onRemove }) {
    return <section className="books-lst-container">
        {
            books.map(book =>
                <div key={book.id} className="book-card">

                    <BookPreview book={book} />
                    <Link to={`/books/${book.id}`}><button>Details</button></Link>
                    <Link to={`/books/edit/${book.id}`}><button>Edit</button></Link>
                    <button onClick={() => onRemove(book.id)}>remove book</button>

                </div>

            )
        }

    </section>
}











