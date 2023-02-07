import React from "react";
import {Task} from "../models/Task";

interface Props {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    description: string;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    id: number;
    setID: React.Dispatch<React.SetStateAction<number>>;
    formAction:boolean;
    setFormAction: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form = ({title, setTitle, description, setDescription, tasks, setTasks, id, setID, formAction, setFormAction}: Props) => {
    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if(title && description) {
            setTasks([...tasks, {id, title, description, isDone:false}]);
            setID(id + 1);
            setTitle("");
            setDescription("");
            setFormAction(false);
        }
    }
    const handleCancel = (e: React.FormEvent) => {
        e.preventDefault();
        setTitle("");
        setDescription("");
        setFormAction(false);
    }

    return (
        <>
        { formAction &&
            <form
                className="form-container container"
                onSubmit={(e) => handleAdd(e)}
            >
                <h1>Add task</h1>
                <input
                    type="text"
                    placeholder="Enter a title for the task"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Enter a description for the task"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                ></textarea>
                <div className="button-container">
                    <button type="submit">Save</button>
                    <button onClick={(e) => handleCancel(e)}>Cancel</button>
                </div>
            </form>
        }
        </>
    );
}

export default Form;