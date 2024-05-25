const { useParams, useNavigate, Link, useSearchParams } = ReactRouterDOM
import { emailService } from "../../../apps/mail/services/mail.service.js"
import { utilService } from "../../../services/util.service.js"

export function MailPreview({ mail, onSelect }) {



    // function onSelect() {

    //     navigate(`/mail/${mail.id}`)
    //     // setMails(prevMails => prevMails.map(m => m.id === mail.id ? { ...m, isRead: true } : m));


    //     console.log("🚀 ~ MailPreview ~ mail:", mail)
    // }
    const dateDetails = utilService.getDateDetails(mail.sentAt)
    return <React.Fragment>
        <td className="input-td"><input type="checkbox" /></td>
        <td onClick={() => onSelect(mail)}>
            <h1>{mail.subject}</h1>
            <h1>{mail.body}</h1>
            <h3> sent at:{dateDetails.year < 2024 ? dateDetails.year : `${dateDetails.monthName}  ${dateDetails.day}`} </h3>
        </td>

    </React.Fragment>

}