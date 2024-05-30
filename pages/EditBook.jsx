const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouter
import { bookService } from "../services/book-service.js"
import { eventBusService, showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
export function EditBook() {

    const params = useParams()
    const navigate = useNavigate()
    const [book, setBook] = useState(bookService.getEmptyBook())


    useEffect(() => {
        if (!params.bookId) return
        bookService.getById(params.bookId)
            .then(setBook)
    }, [])


    function onSave(ev) {
        ev.preventDefault()
        bookService.save(book)
            .then(() => navigate('/books'))
        if (!params.bookId) return showSuccessMsg('a book was added!')
    }

    function handleChange({ target }) {
        const { type, name: prop } = target
        let { value } = target
        if (prop === 'price') {

            setBook(prevBook => ({ ...prevBook, listPrice: { amount: +value } }))
            return
        }
        switch (type) {
            case 'range':
            case 'number':
                value = +value
                break;

            case 'checkbox':
                value = target.checked
                break;
        }
        setBook(prevBook => ({ ...prevBook, [prop]: value }))
    }

    return <section>
        <h1>{params.bookId ? 'Edit book' : 'Add book'}</h1>

        <form onSubmit={onSave}>
            <label htmlFor="title">Enter title</label>
            <input onChange={handleChange} type="text" id="title" name="title" placeholder="title" value={book.title} />

            <label htmlFor="price">Enter price</label>
            <input onChange={handleChange} type="number" id="price" name="price" placeholder="price" value={book.listPrice.amount} />

            <label htmlFor="authors">Enter price</label>
            <input onChange={handleChange} type="text" id="authors" name="authors" placeholder="authors" value={book.authors} />

            <label htmlFor="publishedDate">Enter price</label>
            <input onChange={handleChange} type="number" id="publishedDate" name="publishedDate" placeholder="publishedDate" value={book.publishedDate} />

            <label htmlFor="description">Enter price</label>
            <input onChange={handleChange} type="text" id="description" name="description" placeholder="description" value={book.description} />

            <label htmlFor="pageCount">Enter price</label>
            <input onChange={handleChange} type="text" id="pageCount" name="pageCount" placeholder="pageCount" value={book.pageCount} />

            <button>save</button>
        </form>
    </section>
}