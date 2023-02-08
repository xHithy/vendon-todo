import React, {useState} from 'react';
import List from "./components/List";
import Form from "./components/Form";
import './styles/style.css';
import { TaskModel } from "./models/TaskModel";

const App: React.FC = () => {
    const [id, setID] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [tasks, setTasks] = useState<TaskModel[]>([]);

    const handleFormAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if(title && description) {
            setTasks([...tasks, {id, title, description, isDone:false}]);
            setID(id + 1);
            setTitle("");
            setDescription("");
        }
    }

    const handleFormCancel = (e: React.FormEvent) => {
        e.preventDefault();
        setTitle("");
        setDescription("");
    }

    const handleTaskDone = (id:number) => {
        setTasks(tasks.map((task) =>
            task.id === id ? {...task,isDone:true} : task
        ));
    }

    const handleTaskEdit = (id:number) => {
        tasks.forEach(task => {
            if(task.id === id) {
            }
        });
    }

    const handleTaskDelete = (id:number) => setTasks(tasks.filter(task => task.id !== id));

    return (
        <div className="main-container">
            <List
                tasks={tasks}
                handleTaskDelete={handleTaskDelete}
                handleTaskDone={handleTaskDone}
                handleTaskEdit={handleTaskEdit}
            />
            <Form
                handleFormAdd={handleFormAdd}
                handleFormCancel={handleFormCancel}
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
            />
        </div>
    );
}

export default App;
