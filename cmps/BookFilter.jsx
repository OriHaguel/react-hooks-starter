const { useState, useEffect } = React

export function BookFilter({ filterBy, onSetFilter }) {
    const [filter, setFilter] = useState(filterBy)

    useEffect(() => {
        onSetFilter(filter)
    }, [filter])

    function handleOnChange({ target }) {
        let { value, name: field, type } = target
        if (type === 'number') value = +value
        setFilter((prevFilter) => ({ ...prevFilter, [field]: value }))


    }

    return <form >
        <label htmlFor="title">title</label>
        <input type="text" id="title" name="title" placeholder="title" onChange={handleOnChange} />

        <label htmlFor="price">price</label>
        <input type="number" id="price" name="price" placeholder="price" onChange={handleOnChange} />

        <button>Filter</button>
    </form>
}