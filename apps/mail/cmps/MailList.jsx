import { MailPreview } from "./MailPreview.jsx"
const { useParams, useNavigate, Link, useSearchParams } = ReactRouterDOM


export function MailList({ mails }) {


    return <table>
        <tbody className="mail-data-container">
            {
                mails.map(mail =>

                    <tr className="mail-data" key={mail.id}>
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
