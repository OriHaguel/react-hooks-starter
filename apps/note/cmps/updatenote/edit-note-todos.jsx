export function EditNoteTodos(props) {



    console.log(props);

    //onSubmit={onAddNote}



    return <section className='review-add'>

        <form onSubmit={(ev) => props.onSave(ev)} className='review-form-note'>
            <div className='review-modal'>
                <h1>edit note text</h1>
                <button className='btn-toggle-modal'
                >X
                </button>
                {props.note.lists.map(line => {
                    return <input type="text" id={line.id} name={line.id} value={line.txt} onChange={(ev) => props.handleChangeTodos(ev, line.id)} />

                })}






                <button>Save</button>
            </div>
        </form>

    </section>
}
/*
  <input
                    autoFocus
                    name="text"
                    type='text'
                    id="text"
                    value={props.note.text ? props.note.text : ''}
                    onChange={props.handleChange}

                />*/