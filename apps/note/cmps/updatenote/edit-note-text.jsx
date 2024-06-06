export function EditNoteText(props) {



    console.log(props);

    //onSubmit={onAddNote}



    return <section className='review-add'>

        <form onSubmit={(ev) => props.onSave(ev)} className='review-form-note'>
            <div className='review-modal-note'>

                <button className='btn-toggle-modal-note'
                >x
                </button>
                <input
                    autoFocus
                    name="subject"
                    type='text'
                    id="text"
                    className="subject-edit-note"

                    value={props.note.subject ? props.note.subject : ''}
                    onChange={props.handleChange}

                />
                <input
                    autoFocus
                    name="text"
                    type='text'
                    id="text"
                    className="budy-edit-note"
                    value={props.note.text ? props.note.text : ''}
                    onChange={props.handleChange}

                />






                <button className='btn-save-modal-note'>Save</button>
            </div>
        </form>

    </section>
}