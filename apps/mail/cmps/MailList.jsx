import { MailPreview } from "./MailPreview.jsx"
const { useParams, useNavigate, Link, useSearchParams } = ReactRouterDOM


export function MailList({ mails, onSelect }) {


    return <table>
        <tbody className="mail-data-container">

            {
                mails.map(mail =>

                    <tr className={`mail-data ${mail.isRead ? 'read' : ''}`} key={mail.id}>
                        <MailPreview mail={mail} onSelect={onSelect} />
                        {/* <Link to={`/books/${book.id}`}><button>Details</button></Link>
                <Link to={`/books/edit/${book.id}`}><button>Edit</button></Link>
                <button onClick={() => onRemove(book.id)}>remove book</button> */}
                    </tr>

                )
            }
        </tbody>
    </table>
}
