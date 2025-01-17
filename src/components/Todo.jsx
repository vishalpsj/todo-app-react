import { useState } from 'react'
import './Todo.css'
import '../responsive.css'
import { DateTime } from './DateTime';
import { TodoForm } from './TodeForm';
import { ClearButton } from './ClearButton';
import { TodoLiSection } from './TodoLiSection';

export const Todo = () => {

    const todoKey = "reactTodoApp"

    const [task, setTask] = useState(() => {
        const getTodoFromLocal = localStorage.getItem(todoKey)
        if (!getTodoFromLocal) return []
        return JSON.parse(getTodoFromLocal)
    })

    const [inputValue, setinputValue] = useState({})

    const handleInputChange = (value) => {
        setinputValue({ id: value, content: value, checked: false })
    }

    const { id, content, checked } = inputValue

    const handleFormSumbmit = (e) => {
        e.preventDefault()
        if (!content) return

        const ifMatched = task.find((curTask) => curTask.content === content)
        if (ifMatched) {
            setinputValue({ id: "", content: "", checked: false })
            return
        }

        setTask((prevTask) => [...prevTask, { id, content, checked }])
        setinputValue({ id: "", content: "", checked: false })
    }

    const handleClearAllBtn = () => {
        if (task) {
            const userConfirmation = confirm("Are you sure you want to clear all tasks? This action cannot be undone.")
            if (userConfirmation) {
                setTask([])
            }
            else {
                return
            }
        }
    }

    const handleDltClick = (value) => {
        const userConfirmationforDlt = confirm(`'${value}' will be permanently deleted. You won't be able to undo this action.`)
        if (userConfirmationforDlt) {
            const updatedTask = task.filter((curTask) => curTask.content !== value)
            setTask(updatedTask)
        }
        else return
    }

    const handleCheckClick = (content) => {
        const updatedTask = task.map((curTask) => {
            if (curTask.content === content) {
                return { ...curTask, checked: !curTask.checked }
            } else {
                return curTask
            }
        })
        setTask(updatedTask)
    }

    localStorage.setItem(todoKey, JSON.stringify(task))

    return (
        <div className="container">
            <h1>To do App</h1>
            <DateTime />
            <TodoForm inputValue={content} handleFormSumbmit={handleFormSumbmit} handleInputChange={handleInputChange} />
            <ul className='unorderedList'>
                {
                    task.map((curTask) => {
                        return (
                            <TodoLiSection
                                key={curTask.id}
                                curTask={curTask.content}
                                handleDltClick={handleDltClick}
                                handleCheckClick={handleCheckClick}
                                checked={curTask.checked} />
                        )
                    })
                }
            </ul>
            <ClearButton handleClearAllBtn={handleClearAllBtn} />
        </div>
    )
}