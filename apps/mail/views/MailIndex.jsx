import { emailService } from "../../../apps/mail/services/mail.service.js"
import { MailFilter } from "../cmps/MailFilter.jsx"
import { MailList } from "../cmps/MailList.jsx"


const { useParams, useNavigate, Link, useSearchParams } = ReactRouterDOM


const { useState, useEffect } = React

export function MailIndex() {
    const [mails, setMails] = useState()
    const navigate = useNavigate()
    const [filterBy, setFilterBy] = useState(emailService.getDefaultFilter())



    useEffect(() => {
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

            })
        // navigate(`/mail/${mail.id}`)
        // setMails(prevMails => prevMails.map(m =>  m.id === mail.id ? { ...m, isRead: !mail.isRead } : m))



    }



    // function onRemove(mailId) {
    //     emailService.remove(mailId)
    //         .then(() => {
    //             setMails(prevmail => prevmail.filter(mail => mail.id !== mailId))
    //             showSuccessMsg('doesit work? no? yes? what ? stop...')
    //         }

    //         )
    // }

    if (!mails) return <h1>loading...</h1>
    return <section>

        <MailFilter onSetFilter={onSetFilter} filterBy={filterBy} />
        <MailList mails={mails} onSelect={onSelect} />
        {/* <Link to={`/books/edit/`}><button>Add a book</button></Link>
        <Link to={`/books/search/`}><button>Search a book</button></Link>
        <BookFilter filterBy={filterBy} onSetFilter={onSetFilter} />
        <BookList books={books} onRemove={onRemove} /> */}

    </section>
}

