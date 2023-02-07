import React, {useState} from 'react';
import List from "./components/List";
import Form from "./components/Form";
import './styles/style.css';
import {Task} from "./models/Task";

const App: React.FC = () => {
    const [id, setID] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [tasks, setTasks] = useState<Task[]>([]);
    const [formAction, setFormAction] = useState<boolean>(false);

    return (
        <div className="main-container">
            <List
                tasks={tasks}
                setTasks={setTasks}
                setFormAction={setFormAction}
            />
            <Form
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                tasks={tasks}
                setTasks={setTasks}
                id={id}
                setID={setID}
                formAction={formAction}
                setFormAction={setFormAction}
            />
        </div>
    );
}

export default App;
