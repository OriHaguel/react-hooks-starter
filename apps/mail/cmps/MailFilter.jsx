const { useState, useEffect } = React

export function MailFilter({ filterBy, onSetFilter }) {
    const [filter, setFilter] = useState(filterBy)

    useEffect(() => {
        onSetFilter(filter)
    }, [filter])



    function handleOnChange({ target }) {

        let { value, name: field, type } = target
        if (type === 'number') value = +value
        setFilter((prevFilter) => ({ ...prevFilter, [field]: value }))


    }

    return <form className="filter">
        <label htmlFor="subject">title</label>
        <input value={filter.subject} type="text" id="subject" name="subject" placeholder="title" onChange={handleOnChange} />

        {/* <label htmlFor="isRead">price</label>
        <input type="text" id="isRead" name="isRead" placeholder="isRead" onChange={handleOnChange} /> */}
        <select value={filter.isRead} name="isRead" id="isRead" onChange={handleOnChange}>
            <option value={null}>none</option>
            <option value={true}>read</option>
            <option value={false}>unread</option>
        </select>


        <button>Filter</button>
    </form>
}