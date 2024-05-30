
export function BookPreview({ book }) {

    return <section className="user-preview">

        <h2>{book.title}</h2>
        <img src={book.thumbnail} />
        <h4>{book.authors}</h4>
        {book.listPrice && <h5>{`${book.listPrice.amount}$`}</h5>}
    </section>
}