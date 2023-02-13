import React from 'react';
import { TaskModel } from '../models/TaskModel';
import SingleTask from './SingleTask';
import { FormModel } from '../models/FormModel';
import { FORM_METHOD_VALUES } from '../values/FormValues';

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
    return (
        <div className='list-container container flex br-10 col p-20'>
            <div className='list-title flex gap-20 jc-sb ai-c'>
                <h1>Task list</h1>
                { form.method === FORM_METHOD_VALUES.HIDDEN &&
                    <button onClick={() => handleTaskAdd()}>Add task</button>
                }
            </div>
            { tasks.map(task => (
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
