const { useParams, useNavigate, Link } = ReactRouterDOM
import { GoogleBooksList } from '../cmps/GoogleBooksList.jsx'
import { utilService } from '../services/util.service.js'
const { useState, useEffect } = React
// import { bookService } from "../services/book-service.js"
export function BookAdd() {

    const navigate = useNavigate()
    const [books, setBooks] = useState()
    console.log("🚀 ~ BookAdd ~ book:", books)



    function handleChange({ target }) {
        let { value } = target


        const url = `https://www.googleapis.com/books/v1/volumes?printType=books&q=${value}`
        const data = fetch(url)
            .then((res) => res.json())
            .then((books) => setBooks(books.items))
    }

    function onGoBack() {
        navigate('/books')
    }

    return <section>
        <button onClick={onGoBack}>go back</button>

        <label htmlFor="title">Enter title</label>
        <input onChange={utilService.debounce(handleChange, 5000)} type="text" id="title" name="title" placeholder="title" />

        <ul>
            {books && books.length > 0 && < GoogleBooksList books={books} />}
        </ul>
    </section>

}