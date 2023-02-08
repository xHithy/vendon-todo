import React from "react";
import { TaskModel } from "../models/TaskModel";
import SingleTask from "./SingleTask";
import { BiPlus } from "react-icons/bi";

interface Props {
    tasks: TaskModel[];
    handleTaskDone: (id:number) => void;
    handleTaskEdit: (id:number) => void;
    handleTaskDelete: (id:number) => void;
}

const List = ({tasks, handleTaskDone, handleTaskEdit, handleTaskDelete}: Props) => {
    return (
        <div className="list-container container">
            <div className="list-title">
                <h1>Task list</h1>
                <BiPlus className="icon"/>
            </div>
            {tasks.map(task => (
                <SingleTask
                    key={task.id}
                    task={task}
                    handleDone={handleTaskDone}
                    handleStartEdit={handleTaskEdit}
                    handleDelete={handleTaskDelete}
                />
            ))}
        </div>
    );
}

export default List;
