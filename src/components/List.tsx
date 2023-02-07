import React from "react";
import { Task } from "../model";
import SingleTask from "./SingleTask";

interface Props {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const List = ({tasks, setTasks}: Props) => {
    return (
        <div className="list-container container">
            <h1>Task list</h1>
            {tasks.map(task => (
                <SingleTask
                    task={task}
                    tasks={tasks}
                    setTasks={setTasks}
                />
            ))}
        </div>
    );
}

export default List;
