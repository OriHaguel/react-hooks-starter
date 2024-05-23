const { useParams, useNavigate, Link, useSearchParams } = ReactRouterDOM
import { emailService } from "../../../apps/mail/services/mail.service.js"

export function MailPreview({ mail, onSelect }) {



    // function onSelect() {

    //     navigate(`/mail/${mail.id}`)
    //     // setMails(prevMails => prevMails.map(m => m.id === mail.id ? { ...m, isRead: true } : m));


    //     console.log("🚀 ~ MailPreview ~ mail:", mail)
    // }

    return <React.Fragment>
        <td className="input-td"><input type="checkbox" /></td>
        <td onClick={() => onSelect(mail)}>
            <h1>{mail.subject}</h1>
            <h1>{mail.body}</h1>
        </td>

    </React.Fragment>

}