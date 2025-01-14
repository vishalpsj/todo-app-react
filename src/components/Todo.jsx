import { useState } from 'react'
import './Todo.css'

export const Todo = () => {

    const [inputValue, setinputValue] = useState("")
    const [task, setTask] = useState([])

    const handleFormSumbmit = (e) => {
        e.preventDefault()

        
        if(!inputValue)return
        
        if(task.includes(inputValue)){
            setinputValue("")
            return
        }
        
        setTask((prevTask) => [...prevTask, inputValue])
        setinputValue("")

    }
    return (
        <>
            <div className="container">
                <h1>To do App</h1>
                {/* <div className="time"></div> */}
                <form onSubmit={handleFormSumbmit} className="input">
                    <input type="text" placeholder="Enter the task here..."autoComplete="off" value={inputValue} onChange={(e) => setinputValue(e.target.value)} />
                    <button type="submit">Add</button>
                </form>
            </div>
        </>
    )
}