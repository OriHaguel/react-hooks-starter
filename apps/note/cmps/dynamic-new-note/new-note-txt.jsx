
export function NewNoteTxt(props) {
    return (
        <section className="add-note-container">

            <div className="add-note-controller">
                <nav className="nav-add-note">
                    <button className="btn-txt btn-active"  ></button>
                    <button className="btn-img" onClick={() => props.toggleType("img")}></button>
                    <button className="btn-video" onClick={() => props.toggleType("video")} ></button>
                    <button className="btn-list"  ></button>
                </nav>
                <form autofocus onSubmit={props.onSave}>
                    <textarea autofocus className="textarea-add-note" id="text" name="text" value={props.note.text ? props.note.text : ''} placeholder="Enter text..." onChange={props.handleChange} />
                    <button className="note-save" >Save note</button>
                </form>

            </div>
        </section>
    )
}