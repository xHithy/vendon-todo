import React from 'react';
import {Task} from "../models/Task";
import { BiTrash, BiEdit, BiCheck } from "react-icons/bi";

interface Props {
    task: Task;
    handleDone: (id:number) => void;
    handleDelete: (id:number) => void;
}

const SingleTask = ({task, handleDone, handleDelete}: Props) => {
    return (
        <div className="task-item">
            <span>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
            </span>
            { !task.isDone &&
                <div className="action-container">
                    <BiCheck
                        className="finish-icon icon"
                        size={18}
                        onClick={() => handleDone(task.id)}
                    />
                    <BiEdit
                        className="edit-icon icon"
                        size={18}
                    />
                    <BiTrash
                        className="delete-icon icon"
                        size={18}
                        onClick={() => handleDelete(task.id)}
                    />
                </div>
            }
        </div>
    );
};

export default SingleTask;
