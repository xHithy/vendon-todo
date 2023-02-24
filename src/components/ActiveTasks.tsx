import React from 'react';
import SingleTask from "./SingleTask";
import {TaskModel} from "../models/TaskModel";
import {FormModel} from "../models/FormModel";

interface Props {
    tasks: TaskModel[];
    handleTaskDone: (id:number) => void;
    handleTaskEdit: (id:number) => void;
    handleTaskDelete: (id:number) => void;
    handleTaskAdd: () => void;
    form: FormModel;
}

const ActiveTasks = ({
   tasks,
   handleTaskDone,
   handleTaskDelete,
   handleTaskEdit,
   form
}: Props) => {
    return (
        <>
            {tasks.map(task => (
                <>
                    { !task.expired &&
                        <SingleTask
                            key={task.id}
                            task={task}
                            handleTaskDone={handleTaskDone}
                            handleTaskEdit={handleTaskEdit}
                            handleTaskDelete={handleTaskDelete}
                            form={form}
                        />
                    }
                </>
            ))}
        </>
    );
};

export default ActiveTasks;