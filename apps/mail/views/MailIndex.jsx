import { emailService } from "../../../apps/mail/services/mail.service.js"
import { MailCompose } from "../cmps/MailCompose.jsx"
import { MailFilter } from "../cmps/MailFilter.jsx"
import { MailList } from "../cmps/MailList.jsx"
import { MailNavbar } from "../cmps/MailNavbar.jsx"




const { useParams, useNavigate, Link, useSearchParams } = ReactRouterDOM


const { useState, useEffect } = React

export function MailIndex() {
    const [mails, setMails] = useState()
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [filterBy, setFilterBy] = useState(emailService.getFilterFromSearchParams(searchParams))
    const [isShowReviewModal, setIsShowReviewModal] = useState(true)


    useEffect(() => {
        setSearchParams(filterBy)
        renderMails()

    }, [filterBy])

    function renderMails() {
        emailService.query(filterBy)
            .then(setMails)
    }
    function onSetFilter(filter) {

        setFilterBy(prevFilter => ({ ...prevFilter, ...filter }))

    }


    function onSelect(mail) {
        emailService.isRead(mail)
            .then((prevMail) => {
                // const mailsMerged = [prevMail, ...mails]
                setMails(prevMails => prevMails.map(m => m.id === prevMail.id ? { ...m, isRead: prevMail.isRead } : m))
                // setMails(prevMails => ({ ...prevMails, mailsMerged }))
                // setMails(prevMails => {
                //     console.log(prevMails)
                //     return prevMails
                // })

            }).then(() => navigate(`/mail/${mail.id}`))

        // setMails(prevMails => prevMails.map(m =>  m.id === mail.id ? { ...m, isRead: !mail.isRead } : m))



    }

    function onSave(mailToAdd) {
        emailService.save(mailToAdd)
            .then((mail) => setMails((prevMails) => ([...prevMails, mail])))
        setIsShowReviewModal(false)
    }


    if (!mails) return <h1>loading...</h1>
    return <section >
        <MailNavbar setIsShowReviewModal={setIsShowReviewModal} />
        <section className="mail-main">

            <MailFilter onSetFilter={onSetFilter} filterBy={filterBy} />
            <MailList mails={mails} onSelect={onSelect} />
            {isShowReviewModal && <MailCompose onSave={onSave} setIsShowReviewModal={setIsShowReviewModal} />}
        </section>

        {/* <Link to={`/books/edit/`}><button>Add a book</button></Link>
        <Link to={`/books/search/`}><button>Search a book</button></Link>
        <BookFilter filterBy={filterBy} onSetFilter={onSetFilter} />
        <BookList books={books} onRemove={onRemove} /> */}

    </section>
}

