
export function NewNoteLists(props) {
    return (
        <section className="add-note-container">

            <div className="add-note-controller">
                <nav className="nav-add-note">
                    <button className="btn-txt" onClick={() => props.toggleType("text")} ></button>
                    <button className="btn-img" onClick={() => props.toggleType("img")}></button>
                    <button className="btn-video" onClick={() => props.toggleType("video")} ></button>
                    <button className="btn-list btn-active"  ></button>
                </nav>
                <form autoFocus onSubmit={props.onSave}>

                    <textarea autoFocus className="textarea-add-note" id="text" name="lists" value={props.note.text ? props.note.text : ''} placeholder="Enter text..." onChange={props.handleChange} />
                    {<p className="note-save" onClick={props.onAddList} >add line here</p>}
                    {props.note.lists && props.note.lists.map(line => {
                        return <p key={line.id}><input value={line.txt ? line.txt : ''} onChange={(ev) => props.handleChangelists(ev, line.id)} type="text" id={line.id} name={line.id} />
                            <label htmlFor={line.id}>{line.txt ? line.txt : 'enter somthing'}</label></p>
                    })
                    }

                    <button className="note-save" >Save note</button>
                </form>

            </div>
        </section>
    )
}