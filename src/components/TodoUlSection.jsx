
import { TodoLiSection } from "./TodoLiSection";

export const TodoUlSection = ({task, setTask}) => {
    return (
        <>
            <div className="todoSection">
                    <ul className='unorderedList'>
                        {
                            task.map((curTask, index) => {
                                return (
                                    <TodoLiSection  key={index} curTask={curTask} task={task} setTask={setTask} />
                                )
                            })
                        }
                    </ul>
                </div>
        </>
    )
}