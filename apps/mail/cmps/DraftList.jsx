import { MailPreview } from "./MailPreview.jsx"

export function DraftList({ mails, onSelect, setMails }) {
    return <table>
        <tbody className="mail-data-container">

            {
                mails.map(mail => {
                    return mail.isDrafted === true && <tr className={`mail-data ${mail.isRead ? 'read' : ''}`} key={mail.id}>
                        <MailPreview mail={mail} onSelect={onSelect} setMails={setMails} />
                    </tr>
                }

                )
            }
        </tbody>
    </table>
}