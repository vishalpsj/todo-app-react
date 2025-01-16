import { MdCheck, MdDeleteForever } from "react-icons/md";
export const TodoLiSection = ({task, setTask, curTask}) => {
    const handleDltClick = (value) => {
        const updatedTask = task.filter((curTask) => curTask !== value)
        setTask(updatedTask)
    }
    return (
        <>
            <li className='todoItem'>
                <div className="todoTask">
                    {curTask}
                </div>
                <div className="todoControl">
                    <MdCheck className='check' />
                    <MdDeleteForever className='dlt' onClick={() => handleDltClick(curTask)} />
                </div>
            </li>
        </>
    )
}