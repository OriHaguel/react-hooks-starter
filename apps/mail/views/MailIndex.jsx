import { emailService } from "../../../apps/mail/services/mail.service.js"
import { MailList } from "../cmps/MailList.jsx"





const { useState, useEffect } = React

export function MailIndex() {
    const [mails, setMails] = useState()

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

    function onRemove(mailId) {
        emailService.remove(mailId)
            .then(() => {
                setMails(prevmail => prevmail.filter(mail => mail.id !== mailId))
                showSuccessMsg('doesit work? no? yes? what ? stop...')
            }

            )
    }

    if (!mails) return <h1>loading...</h1>
    return <section>
        <MailList mails={mails} />
        {/* <Link to={`/books/edit/`}><button>Add a book</button></Link>
        <Link to={`/books/search/`}><button>Search a book</button></Link>
        <BookFilter filterBy={filterBy} onSetFilter={onSetFilter} />
        <BookList books={books} onRemove={onRemove} /> */}

    </section>
}

