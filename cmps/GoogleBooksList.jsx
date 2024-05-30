import { bookService } from "../services/book-service.js"




export function GoogleBooksList({ books }) {
    return <div>
        {books.map(book => (
            <li key={book.id}>{book.volumeInfo.title}<button onClick={() => bookService.addGooglrBook(book.volumeInfo)}>+</button></li>
        ))}
    </div>
}