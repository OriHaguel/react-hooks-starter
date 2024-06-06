const { useState, useEffect } = React

export function NotesFilter({ filterBy, onSetFilter }) {
    const [filter, setFilter] = useState(filterBy)

    useEffect(() => {
        onSetFilter(filter)
    }, [filter])



    function handleOnChange({ target }) {

        let { value, name: prop, type } = target

        setFilter((prevFilter) => ({ ...prevFilter, [prop]: value }))


    }

    return <form >
        <label htmlFor="subject"></label>
        <input className="input-search-note" type="text" id="subject" name="text" placeholder="search keep.." onChange={handleOnChange} />

    </form>
}