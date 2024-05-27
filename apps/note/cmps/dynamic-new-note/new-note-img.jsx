export function NewNoteImg(props) {
    return (
        <section className="add-note-container">

            <div className="add-note-controller">
                <nav className="nav-add-note">
                    <button className="btn-txt " onClick={() => props.toggleType("text")}  ></button>
                    <button className="btn-img btn-active" ></button>
                    <button className="btn-video"  ></button>
                    <button className="btn-list"  ></button>
                </nav>
                <form onSubmit={props.onSave}>
                    <textarea className="textarea-add-note" id="text" name="text" value={props.note.text ? props.note.text : ''} placeholder="Enter text..." onChange={props.handleChange} />
                    <button className="keep-save" >Save note</button>
                </form>

            </div>
        </section>
    )
}