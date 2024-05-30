
import { BookFilter } from "../cmps/BookFilter.jsx"
import { BookList } from "../cmps/BookList.jsx"
import { bookService } from "../services/book-service.js"
import { BookDetails } from "./BookDetails.jsx"

const { Link } = ReactRouterDOM
import { eventBusService, showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'


const { useState, useEffect } = React

export function BookIndex() {

    const [books, setBooks] = useState()

    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())



    useEffect(() => {
        renderBooks()

    }, [filterBy])

    function renderBooks() {
        bookService.query(filterBy)
            .then(setBooks)
    }
    function onSetFilter(filter) {

        setFilterBy(prevFilter => ({ ...prevFilter, ...filter }))

    }

    function onRemove(bookId) {
        bookService.remove(bookId)
            .then(() => {
                setBooks(prevBook => prevBook.filter(book => book.id !== bookId))
                showSuccessMsg('doesit work? no? yes? what ? stop...')
            }

            )
    }

    if (!books) return <h1>loading...</h1>
    return <section>
        <Link to={`/books/edit/`}><button>Add a book</button></Link>
        <Link to={`/books/search/`}><button>Search a book</button></Link>
        <BookFilter filterBy={filterBy} onSetFilter={onSetFilter} />
        <BookList books={books} onRemove={onRemove} />

    </section>
}