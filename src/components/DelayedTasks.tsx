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

const DelayedTasks = ({
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
                    { task.expired && !task.isDone &&
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

export default DelayedTasks;