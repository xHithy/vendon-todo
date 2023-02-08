import React from 'react';
import { TaskModel } from "../models/TaskModel";
import { BiTrash, BiEdit, BiCheck } from "react-icons/bi";

interface Props {
    task: TaskModel;
    handleDone: (id:number) => void;
    handleDelete: (id:number) => void;
    handleStartEdit: (id:number) => void;
}

const SingleTask = ({task, handleDone, handleDelete, handleStartEdit}: Props) => {
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
                        onClick={() => handleStartEdit(task.id)}
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
