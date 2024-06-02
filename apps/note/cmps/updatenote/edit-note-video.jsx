export function EditNoteVideo(props) {



    console.log(props);

    //onSubmit={onAddNote}



    return <section className='review-add'>

        <form onSubmit={(ev) => props.onSave(ev)} className='review-form-note'>
            <div className='review-modal-note'>
                <h1>edit note video</h1>
                <button className='btn-toggle-modal-note'
                >X
                </button>
                <input
                    autoFocus
                    name="vidUrl"
                    type='text'
                    id="text"
                    value={props.note.vidUrl ? props.note.vidUrl : ''}
                    onChange={props.handleChange}

                />





                <button className='btn-save-modal-note'>Save</button>
            </div>
        </form>

    </section>
}