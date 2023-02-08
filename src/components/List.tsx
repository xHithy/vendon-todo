import React from "react";
import { TaskModel } from "../models/TaskModel";
import SingleTask from "./SingleTask";
import { FormModel } from "../models/FormModel";

interface Props {
    tasks: TaskModel[];
    handleTaskDone: (id:number) => void;
    handleTaskEdit: (id:number) => void;
    handleTaskDelete: (id:number) => void;
    handleTaskAdd: () => void;
    form: FormModel;
}

const List = ({tasks, handleTaskDone, handleTaskEdit, handleTaskDelete, handleTaskAdd, form}: Props) => {
    return (
        <div className="list-container container">
            <div className="list-title">
                <h1>Task list</h1>
                { form.method === "hidden" &&
                    <button onClick={() => handleTaskAdd()}>Add task</button>
                }
            </div>
            {tasks.map(task => (
                <SingleTask
                    key={task.id}
                    task={task}
                    handleTaskDone={handleTaskDone}
                    handleTaskEdit={handleTaskEdit}
                    handleTaskDelete={handleTaskDelete}
                    form={form}
                />
            ))}
        </div>
    );
}

export default List;
