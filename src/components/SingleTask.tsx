import React from 'react';
import { TaskModel } from '../models/TaskModel';
import { BiTrash, BiEdit, BiCheck } from 'react-icons/bi';
import { FormModel } from '../models/FormModel';
import { FORM_METHOD_VALUES } from '../values/FormValues';

interface Props {
    task: TaskModel;
    handleTaskDone: (id:number) => void;
    handleTaskDelete: (id:number) => void;
    handleTaskEdit: (id:number) => void;
    form: FormModel;
}

const SingleTask = ({
    task,
    handleTaskDone,
    handleTaskDelete,
    handleTaskEdit,
    form
}: Props) => {
    return (
        <div className='task-item flex br-10 gap-20 p-20 jc-sb ai-c'>
            <div>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
            </div>
            { !task.isDone && form.method === FORM_METHOD_VALUES.HIDDEN &&
                <div className='action-container flex col'>
                    <BiCheck
                        className='finish-icon icon br-10 pointer'
                        size={18}
                        onClick={() => handleTaskDone(task.id)}
                    />
                    <BiEdit
                        className='edit-icon icon br-10 pointer'
                        size={18}
                        onClick={() => handleTaskEdit(task.id)}
                    />
                    <BiTrash
                        className='delete-icon icon br-10 pointer'
                        size={18}
                        onClick={() => handleTaskDelete(task.id)}
                    />
                </div>
            }
        </div>
    );
};

export default SingleTask;
