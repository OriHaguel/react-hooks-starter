import { MailPreview } from "./MailPreview.jsx"



export function MailList({ mails }) {
    return <table>
        <tbody className="mail-data-container">
            {
                mails.map(mail =>
                    <tr key={mail.id} className="mail-data">
                        <MailPreview mail={mail} />
                        {/* <Link to={`/books/${book.id}`}><button>Details</button></Link>
                <Link to={`/books/edit/${book.id}`}><button>Edit</button></Link>
                <button onClick={() => onRemove(book.id)}>remove book</button> */}
                    </tr>

                )
            }
        </tbody>
    </table>
}
