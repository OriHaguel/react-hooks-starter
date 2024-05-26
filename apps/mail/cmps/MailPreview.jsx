const { useParams, useNavigate, Link, useSearchParams } = ReactRouterDOM
import { emailService } from "../../../apps/mail/services/mail.service.js"
import { LongTxt } from "../../../cmps/LongTxt.jsx"

import { utilService } from "../../../services/util.service.js"



export function MailPreview({ mail, onSelect }) {



    // function onSelect() {

    //     navigate(`/mail/${mail.id}`)
    //     // setMails(prevMails => prevMails.map(m => m.id === mail.id ? { ...m, isRead: true } : m));


    //     console.log("🚀 ~ MailPreview ~ mail:", mail)
    // }
    const dateDetails = utilService.getDateDetails(mail.sentAt)
    return <React.Fragment>
        <td><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9D9D9"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" /></svg></td>
        <td className="input-td"><input type="checkbox" /></td>
        <td className="text-container" onClick={() => onSelect(mail)}>
            <span className={`span-text sub ${!mail.isRead && 'subject'}`}> {mail.subject}</span>
            {/* <span>{mail.body}</span> */}
            <span className="span-text"><LongTxt txt={mail.body} /></span>
            <span className="span-date">{dateDetails.year < 2024 ? dateDetails.year : `${dateDetails.monthName}  ${dateDetails.day}`} </span>
        </td>

    </React.Fragment>

}