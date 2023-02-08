import React from "react";
import { TaskModel } from "../models/TaskModel";
import SingleTask from "./SingleTask";
import { BiPlus } from "react-icons/bi";

interface Props {
    tasks: TaskModel[];
    handleTaskDone: (id:number) => void;
    handleTaskEdit: (id:number) => void;
    handleTaskDelete: (id:number) => void;
    handleTaskAdd: () => void;
}

const List = ({tasks, handleTaskDone, handleTaskEdit, handleTaskDelete, handleTaskAdd}: Props) => {
    return (
        <div className="list-container container">
            <div className="list-title">
                <h1>Task list</h1>
                <BiPlus className="icon" onClick={() => handleTaskAdd()}/>
            </div>
            {tasks.map(task => (
                <SingleTask
                    key={task.id}
                    task={task}
                    handleTaskDone={handleTaskDone}
                    handleTaskEdit={handleTaskEdit}
                    handleTaskDelete={handleTaskDelete}
                />
            ))}
        </div>
    );
}

export default List;
