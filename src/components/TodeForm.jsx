export const TodoForm = ({inputValue, setinputValue, task, setTask}) => {
        const handleFormSumbmit = (e) => {
            e.preventDefault()
    
            if (!inputValue) return
    
            if (task.includes(inputValue)) {
                setinputValue("")
                return
            }
    
            setTask((prevTask) => [...prevTask, inputValue])
            setinputValue("")
        }
    return (
        <>
            <form onSubmit={handleFormSumbmit} className="input">
                    <input type="text" placeholder="Enter the task here..." autoComplete="off" value={inputValue} onChange={(e) => setinputValue(e.target.value)} />
                    <button className='submitBtn' type="submit">Add</button>
                </form>
        </>
    )
}