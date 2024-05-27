import { MailPreview } from "./MailPreview.jsx"
const { useParams, useNavigate, Link, useSearchParams } = ReactRouterDOM


export function MailList({ mails, onSelect, setMails }) {


    return <table>
        <tbody className="mail-data-container">

            {
                mails.map(mail =>

                    <tr className={`mail-data ${mail.isRead ? 'read' : ''}`} key={mail.id}>
                        <MailPreview mail={mail} onSelect={onSelect} setMails={setMails} />
                    </tr>

                )
            }
        </tbody>
    </table>
}
