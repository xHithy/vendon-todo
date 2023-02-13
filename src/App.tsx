import React, { useState } from 'react';
import List from './components/List';
import Form from './components/Form';
import './styles/main.scss';
import { TaskModel } from './models/TaskModel';
import { FormModel } from './models/FormModel';
import { FORM_METHOD_VALUES} from './values/FormValues';

const App: React.FC = () => {
    const [id, setID] = useState<number>(1);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [tasks, setTasks] = useState<TaskModel[]>([]);
    const [form, setForm] = useState<FormModel>({ method:FORM_METHOD_VALUES.HIDDEN, task:null });

    const handleFormAdd = (e: React.FormEvent) => {
        e.preventDefault();
        // Add task functionality
        if (title && description && form.method === FORM_METHOD_VALUES.ADD) {
            setTasks([...tasks, { id, title, description, isDone:false }]);
            setID(id + 1);
            setTitle('');
            setDescription('');
            setForm({ method:FORM_METHOD_VALUES.HIDDEN, task:null });
        }

        // Edit task functionality
        if (title && description && form.method === FORM_METHOD_VALUES.EDIT && form.task?.id) {
            let taskID = form.task.id;
            setForm({ method:FORM_METHOD_VALUES.HIDDEN, task:null });
            setTitle('');
            setDescription('');
            setTasks(tasks.map((task) =>
                task.id === taskID ? { ...task, title:title, description:description } : task
            ));
        }
    }

    const handleFormCancel = (e: React.FormEvent) => {
        e.preventDefault();
        setTitle('');
        setDescription('');
        setForm({ method:FORM_METHOD_VALUES.HIDDEN, task:null });
    }

    const handleTaskDone = (id:number) => {
        setTasks(tasks.map((task) =>
            task.id === id ? { ...task, isDone:true } : task
        ));
    }

    const handleTaskEdit = (id:number) => {
        tasks.forEach(task => {
            if(task.id === id) {
                setForm({ method:FORM_METHOD_VALUES.EDIT, task:task });
                setTitle(task.title);
                setDescription(task.description);
            }
        });
    }

    const handleTaskDelete = (id:number) => setTasks(tasks.filter(task => task.id !== id));

    const handleTaskAdd = () => setForm({ method:FORM_METHOD_VALUES.ADD, task:null });

    return (
        <div className='main-container flex gap-20 jc-sb wrap'>
            <List
                tasks={tasks}
                handleTaskDelete={handleTaskDelete}
                handleTaskDone={handleTaskDone}
                handleTaskEdit={handleTaskEdit}
                handleTaskAdd={handleTaskAdd}
                form={form}
            />
            <Form
                handleFormAdd={handleFormAdd}
                handleFormCancel={handleFormCancel}
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                form={form}
            />
        </div>
    );
}

export default App;
