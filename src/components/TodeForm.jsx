export const TodoForm = ({handleFormSumbmit, inputValue, setinputValue}) => {
    return (
        <>
            <form onSubmit={handleFormSumbmit} className="input">
                    <input type="text" placeholder="Enter the task here..." autoComplete="off" value={inputValue} onChange={(e) => setinputValue(e.target.value)} />
                    <button className='submitBtn' type="submit">Add</button>
                </form>
        </>
    )
}