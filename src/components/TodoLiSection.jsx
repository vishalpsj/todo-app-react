import { MdCheck, MdDeleteForever } from "react-icons/md";
export const TodoLiSection = ({handleDltClick, curTask, handleCheckClick, checked}) => {

    return (
        <>
            <li className='todoItem'>
                <div className="todoTask">
                    <span className={checked?"checkList": "notChecked"}>{curTask}</span>
                </div>
                <div className="todoControl">
                    <MdCheck className='check' onClick={() => handleCheckClick(curTask)} />
                    <MdDeleteForever className='dlt' onClick={() => handleDltClick(curTask)} />
                </div>
            </li>
        </>
    )
}