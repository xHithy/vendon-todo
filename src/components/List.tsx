import React from 'react';
import { TaskModel } from '../models/TaskModel';
import { FormModel } from '../models/FormModel';
import { FORM_METHOD_VALUES } from '../values/FormValues';
import FinishedTasks from "./FinishedTasks";
import ActiveTasks from "./ActiveTasks";
import DelayedTasks from "./DelayedTasks";

interface Props {
    tasks: TaskModel[];
    handleTaskDone: (id:number) => void;
    handleTaskEdit: (id:number) => void;
    handleTaskDelete: (id:number) => void;
    handleTaskAdd: () => void;
    form: FormModel;
}

const List = ({
    tasks,
    handleTaskDone,
    handleTaskEdit,
    handleTaskDelete,
    handleTaskAdd,
    form
}: Props) => {
    tasks = tasks.sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime());

    return (
        <div className='list-container container flex br-10 col p-20'>
            <div className='list-title flex gap-20 jc-sb ai-c'>
                <h1>Task list</h1>
                { form.method === FORM_METHOD_VALUES.HIDDEN &&
                    <button onClick={() => handleTaskAdd()}>Add task</button>
                }
            </div>
            <DelayedTasks
                tasks={tasks}
                handleTaskDone={handleTaskDone}
                handleTaskEdit={handleTaskEdit}
                handleTaskDelete={handleTaskDelete}
                handleTaskAdd={handleTaskAdd}
                form={form}
            />
            <ActiveTasks
                tasks={tasks}
                handleTaskDone={handleTaskDone}
                handleTaskEdit={handleTaskEdit}
                handleTaskDelete={handleTaskDelete}
                handleTaskAdd={handleTaskAdd}
                form={form}
            />
            <FinishedTasks
                tasks={tasks}
                handleTaskDone={handleTaskDone}
                handleTaskEdit={handleTaskEdit}
                handleTaskDelete={handleTaskDelete}
                handleTaskAdd={handleTaskAdd}
                form={form}
            />
        </div>
    );
}

export default List;
