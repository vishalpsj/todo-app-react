import { useState } from 'react'
import './Todo.css'
import '../responsive.css'
import { DateTime } from './DateTime';
import { TodoForm } from './TodeForm';
import { TodoUlSection } from './TodoUlSection';
import { ClearButton } from './ClearButton';


export const Todo = () => {

    const [task, setTask] = useState([])



    const handleClearAllBtn = () => {
        setTask([])
    }

    return (
        <div className="container">
            <h1>To do App</h1>
            <DateTime />
            <TodoForm task={task} setTask={setTask} />
            <TodoUlSection task={task} setTask={setTask} />
            <ClearButton handleClearAllBtn={handleClearAllBtn} />
        </div>
    )
}