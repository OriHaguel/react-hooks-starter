

export function EditNoteImg(props) {



    console.log(props);

    //onSubmit={onAddNote}



    return <section className='review-add'>

        <form onSubmit={(ev) => props.onSave(ev)} className='review-form-note'>
            <div className='review-modal'>
                <h1>edit note</h1>
                <button className='btn-toggle-modal'
                >X
                </button>
                <input
                    autoFocus
                    name="imgUrl"
                    type='text'
                    id="text"
                    value={props.note.imgUrl ? props.note.imgUrl : ''}
                    onChange={props.handleChange}

                />





                <button>Save</button>
            </div>
        </form>

    </section>
}