import { AddReview } from "../cmps/AddReview.jsx"
import { ReviewList } from "../cmps/ReviewList.jsx"

import { bookService } from "../services/book-service.js"


const { useParams, useNavigate, Link } = ReactRouterDOM
const { useState, useEffect } = React

export function BookDetails() {
    const navigate = useNavigate()
    const params = useParams()
    const [book, setBook] = useState(null)
    const [isShowReviewModal, setIsShowReviewModal] = useState(false)



    useEffect(() => {
        // loadBook()
        bookService.getById(params.bookId)
            .then(setBook)
    }, [params.bookId])

    // function loadBook() {

    // }
    if (!book) return <div>Loading...</div>



    function saveReview(reviewToAdd) {

        bookService.addReview(book.id, reviewToAdd)
            .then((prevReview) => {
                const reviews = [prevReview, ...book.reviews]
                console.log(reviews)
                setBook(prevBook => {
                    console.log("🚀 ~ .then ~ prevBook:", prevBook)
                    return ({ ...prevBook, reviews })
                })

            })
    }

    function onRemoveReview(reviewId) {
        bookService.removeReview(book.id, reviewId)
            .then(() => {
                const filteredReviews = book.reviews.filter(review => review.id !== reviewId)
                setBook({ ...book, reviews: filteredReviews })
            })
    }


    function pages() {

        if (book.pageCount > 500) return `${book.pageCount} - Serious Reading`
        else if (book.pageCount > 200) return `${book.pageCount} - Descent Reading`
        else if (book.pageCount < 100) return `${book.pageCount} - Light Reading`

        return book.pageCount
    }

    function published() {
        const currYear = new Date().getFullYear()
        if (currYear - book.publishedDate > 10) return `${book.publishedDate} - Vintage`
        else if (currYear - book.publishedDate < 1) return `${book.publishedDate} - New`
    }

    function color() {
        if (book.listPrice.amount > 150) return 'red'
        if (book.listPrice.amount < 20) return 'green'
    }

    function onGoBack() {
        navigate('/books')
    }

    function onToggleModal() {
        setIsShowReviewModal(prevModal => !prevModal)
    }


    return <section className="details">
        <section >
            <button onClick={onGoBack}>go back</button>
            <h1>{book.title}</h1>
            <img src={book.thumbnail} />
            <h2>{book.authors}</h2>
            {book.listPrice && <h3 className={color()}>{`${book.listPrice.amount}$`}</h3>}
            <h3 >{book.description}</h3>
            <h3 >{pages()}</h3>
            <h3>{published()}</h3>
            {book.listPrice && <h3>{book.listPrice.isOnSale && 'on sale!!!'}</h3>}
            <Link to={`/books/${book.prevBookId}`}><button>Prev</button></Link>
            <Link to={`/books/${book.nextBookId}`}><button>Next</button></Link>
            <button onClick={onToggleModal}>Add review</button>
            {/* <Link to={`/books/details/${book.id}`}><button>Add review</button></Link>
             */}

        </section>
        {book.reviews && book.reviews.length > 0 &&
            <div className="book-review-container">
                <ReviewList book={book} onRemoveReview={onRemoveReview} />
            </div>
        }
        {isShowReviewModal && <AddReview setBook={setBook} saveReview={saveReview} onToggleModal={onToggleModal} />}

    </section>


}


