import React, {useState} from 'react';
import List from "./components/List";
import Form from "./components/Form";
import './styles/style.css';
import {Task} from "./model";

const App: React.FC = () => {
    const [id, setID] = useState(0);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [tasks, setTasks] = useState<Task[]>([]);
    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if(title && description) {
            setTasks([...tasks, {id, title, description, isDone:false}]);
            setID(id + 1);
            setTitle("");
            setDescription("");
            console.log(tasks);
        }
    }

    return (
        <div className="main-container">
            <List
                tasks={tasks}
                setTasks={setTasks}
            />
            <Form
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                handleAdd={handleAdd}
            />
        </div>
    );
}

export default App;
