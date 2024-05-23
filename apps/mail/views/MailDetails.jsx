import { emailService } from "../../../apps/mail/services/mail.service.js"
import { utilService } from "../../../services/util.service.js"


const { useParams, useNavigate, Link, useSearchParams } = ReactRouterDOM
const { useState, useEffect } = React


export function MailDetails() {
    // const [searchParams, setSearchParams] = useSearchParams()
    const params = useParams()
    const navigate = useNavigate()
    const [mail, setMail] = useState();


    useEffect(() => {
        // loadBook()
        emailService.get(params.mailId)
            .then(setMail)
    }, [params.mailId])


    function onRemoveMail(mailId) {
        emailService.remove(mailId)
            .then(() => onGoBack())
    }

    function onGoBack() {
        navigate('/mail')
    }


    if (!mail) return <h1>loading...</h1>
    const { subject, body, isRead, sentAt, removedAt, from, to } = mail
    return <div>
        <button onClick={onGoBack}>Go back</button>
        <h1>subject: {subject}</h1>
        <h2>{body}</h2>
        <h3>{isRead ? 'you read this mail' : 'you have not raed this mail'}</h3>
        <h3>sent at: {utilService.getDayName(sentAt, 'en')}</h3>
        {removedAt && <h3>removedAt: {removedAt}</h3>}
        <h3>{from}</h3>
        <h3>{to}</h3>
        <button onClick={() => onRemoveMail(params.mailId)}>delete mail</button>
    </div>
}