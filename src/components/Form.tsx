import React from "react";

interface Props {
    handleFormAdd: (e: React.FormEvent) => void;
    handleFormCancel: (e: React.FormEvent) => void;
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    description: string;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
}

const Form = ({handleFormAdd, handleFormCancel, title, setTitle, description, setDescription}: Props) => {
    return (
        <form className="form-container container" onSubmit={(e) => handleFormAdd(e)}>
            <h1>Add Task</h1>
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
                <button onClick={(e) => handleFormCancel(e)}>Cancel</button>
            </div>
        </form>
    );
}

export default Form;