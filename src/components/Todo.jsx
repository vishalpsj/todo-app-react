import { useState } from 'react'
import './Todo.css'
import '../responsive.css'
import { DateTime } from './DateTime';
import { TodoForm } from './TodeForm';
import { ClearButton } from './ClearButton';
import { TodoLiSection } from './TodoLiSection';

export const Todo = () => {

    const [task, setTask] = useState([])
    const [inputValue, setinputValue] = useState({})

    const handleInputChange = (value) => {
        setinputValue({id:value, content:value, checked:false})
    }

    const {id, content, checked} = inputValue

    const handleFormSumbmit = (e) => {
        e.preventDefault()
        if (!content) return

        const ifMatched = task.find((curTask) => curTask.content === content)
        if(ifMatched){
            setinputValue({id:"", content:"", checked:false})
            return
        }

        setTask((prevTask) => [...prevTask, {id, content, checked}])
        setinputValue({id:"", content:"", checked:false})
    }

    const handleClearAllBtn = () => {
        setTask([])
    }

    const handleDltClick = (value) => {
        const updatedTask = task.filter((curTask) => curTask.content !== value)
        setTask(updatedTask)
    }

    const handleCheckClick = (content) => {
        const updatedTask = task.map((curTask) => {
            if(curTask.content === content){
                return {...curTask, checked: !curTask.checked}
            } else{
                return curTask
            }
        })
        setTask(updatedTask)
    }

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
                                    checked={curTask.checked}/>
                                )
                            })
                        }
                    </ul>
            <ClearButton handleClearAllBtn={handleClearAllBtn} />
        </div>
    )
}