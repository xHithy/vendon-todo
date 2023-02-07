import React from "react";
import { Task } from "../models/Task";
import SingleTask from "./SingleTask";
import { BiPlus } from "react-icons/bi";

interface Props {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    setFormAction: React.Dispatch<React.SetStateAction<boolean>>;
}

const List = ({tasks, setTasks, setFormAction}: Props) => {
    const handleDone = (id:number) => {
        setTasks(tasks.map((task) =>
            task.id === id ? {...task,isDone:true} : task
        ));
    }
    const handleDelete = (id:number) => {
        setTasks(tasks.filter(task => task.id !== id));
    }
    const handleFormAction = () => {
        setFormAction(true);
    }

    return (
        <div className="list-container container">
            <div className="list-title">
                <h1>Task list</h1>
                <BiPlus className="icon" onClick={() => handleFormAction()}/>
            </div>
            {tasks.map(task => (
                <SingleTask key={task.id}
                    task={task}
                    handleDone={handleDone}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    );
}

export default List;
