export const TodoForm = ({ handleFormSumbmit, inputValue, handleInputChange }) => {

    return (
        <>
            <form onSubmit={handleFormSumbmit} className="input">
                <input type="text" placeholder="Enter the task here..." autoComplete="off" value={inputValue} onChange={(event) => handleInputChange(event.target.value)} />
                <button className='submitBtn' type="submit">Add</button>
            </form>
        </>
    )
}