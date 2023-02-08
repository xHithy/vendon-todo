import React from 'react';
import { TaskModel } from "../models/TaskModel";
import { BiTrash, BiEdit, BiCheck } from "react-icons/bi";
import { FormModel } from "../models/FormModel";

interface Props {
    task: TaskModel;
    handleTaskDone: (id:number) => void;
    handleTaskDelete: (id:number) => void;
    handleTaskEdit: (id:number) => void;
    form: FormModel;
}

const SingleTask = ({task, handleTaskDone, handleTaskDelete, handleTaskEdit, form}: Props) => {
    return (
        <div className="task-item">
            <span>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
            </span>
            { !task.isDone && form.method === "hidden" &&
                <div className="action-container">
                    <BiCheck
                        className="finish-icon icon"
                        size={18}
                        onClick={() => handleTaskDone(task.id)}
                    />
                    <BiEdit
                        className="edit-icon icon"
                        size={18}
                        onClick={() => handleTaskEdit(task.id)}
                    />
                    <BiTrash
                        className="delete-icon icon"
                        size={18}
                        onClick={() => handleTaskDelete(task.id)}
                    />
                </div>
            }
        </div>
    );
};

export default SingleTask;
