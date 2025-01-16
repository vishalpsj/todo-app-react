import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoUlSection = ({task, setTask}) => {
    return (
        <>
            <div className="todoSection">
                    <ul className='unorderedList'>
                        {
                            task.map((curTask, index) => {
                                const handleDltClick = (value) => {
                                    const updatedTask = task.filter((curTask) => curTask !== value)
                                    setTask(updatedTask)
                                }
                                return (
                                    <li key={index} className='todoItem'>
                                        <div className="todoTask">
                                            {curTask}
                                        </div>
                                        <div className="todoControl">
                                            <MdCheck className='check'/>
                                            <MdDeleteForever className='dlt' onClick={() => handleDltClick(curTask)}/>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
        </>
    )
}