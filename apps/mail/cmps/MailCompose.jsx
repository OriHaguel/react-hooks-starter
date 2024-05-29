import { emailService } from "../../../apps/mail/services/mail.service.js"

const { useState, useEffect, useRef } = React

export function MailCompose({ onSave, setIsShowReviewModal, onAutoSave }) {
    const [addMail, setAddMail] = useState(emailService.getDefaultMail())
    const intervalRef = useRef()



    useEffect(() => {
        intervalRef.current = setInterval(() => {
            onAutoSave(addMail)
                .then((mail) => setAddMail(prevMail => ({ ...prevMail, ...mail })))
        }, 2000)

        return () => clearInterval(intervalRef.current)
    }, [addMail])


    function onSaveMail(ev) {
        ev.preventDefault()
        onSave(addMail)
        clearInterval(intervalRef.current)
    }



    function handleChange({ target }) {
        const { type, name: prop } = target

        let { value } = target
        switch (type) {
            case 'range':
            case 'number':
                value = +value
                break;

            case 'checkbox':
                value = target.checked
                break;
        }
        setAddMail(prevReview => ({ ...prevReview, [prop]: value }))

    }


    return (
        <section className='mail-add'>
            <div className='mail-modal'>
                <div className="modal-header">
                    <h1>New Message</h1>
                    <button className="close-button" onClick={() => setIsShowReviewModal(false)}>x</button>
                </div>


                <form className='review-form' onSubmit={onSaveMail}>

                    <input onChange={handleChange} type="text" id="from" name="from" placeholder="From" />

                    <input onChange={handleChange} type="text" id="to" name="to" placeholder="To" />

                    <input onChange={handleChange} className="compose-subject" type="text" id="subject" name="subject" placeholder="Subject" />

                    <textarea onChange={handleChange} rows={15} cols={50} maxLength={200} name="body" id="body"></textarea>
                    <button>Send</button>
                </form>

            </div>
        </section>

    )

}