import React from 'react';
import {Task} from "../model";
import { BiTrash, BiEdit, BiCheck } from "react-icons/bi";

interface Props {
    task: Task;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const SingleTask = ({task, tasks, setTasks}: Props) => {
    return (
        <div className="task-item" key={task.id}>
            <span>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
            </span>
            <div className="action-container">
                <BiCheck className="finish-icon icon" size={18}/>
                <BiEdit className="edit-icon icon" size={18}/>
                <BiTrash className="delete-icon icon" size={18}/>
            </div>
        </div>
    );
};

export default SingleTask;
