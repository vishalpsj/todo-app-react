import { useState } from 'react'
import './Todo.css'
import '../responsive.css'
import { DateTime } from './DateTime';
import { TodoForm } from './TodeForm';
import { TodoUlSection } from './TodoUlSection';
import { ClearButton } from './ClearButton';

export const Todo = () => {

    const [task, setTask] = useState([])
    const [inputValue, setinputValue] = useState("")

    const handleInputChange = (value) => {
        setinputValue(value)
    }

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

    const handleClearAllBtn = () => {
        setTask([])
    }

    return (
        <div className="container">
            <h1>To do App</h1>
            <DateTime />
            <TodoForm inputValue={inputValue} handleFormSumbmit={handleFormSumbmit} handleInputChange={handleInputChange} />
            <TodoUlSection task={task} setTask={setTask} />
            <ClearButton handleClearAllBtn={handleClearAllBtn} />
        </div>
    )
}