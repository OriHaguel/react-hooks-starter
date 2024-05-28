const { useState, useEffect } = React
const { useParams, useNavigate, Link, useSearchParams } = ReactRouterDOM
import { MailNavbar } from "../cmps/MailNavbar.jsx"
import { emailService } from "../../../apps/mail/services/mail.service.js"
import { DeletedList } from "../cmps/DeletedList.jsx"


export function DeleteIndex() {
    const [mails, setMails] = useState()
    const [isShowReviewModal, setIsShowReviewModal] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        renderMails()

    }, [])

    function renderMails() {
        emailService.query()
            .then(setMails)
    }

    function onSelect(mail) {
        emailService.isRead(mail)
            .then((prevMail) => {
                setMails(prevMails => prevMails.map(m => m.id === prevMail.id ? { ...m, isRead: prevMail.isRead } : m))

            }).then(() => navigate(`/mail/${mail.id}`))
    }

    if (!mails) return <h1>loading...</h1>
    return <section >
        <MailNavbar setIsShowReviewModal={setIsShowReviewModal} mails={mails} />
        <section className="mail-main">
            <DeletedList mails={mails} onSelect={onSelect} setMails={setMails} />

        </section>



    </section>
}