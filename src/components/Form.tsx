import React from "react";

interface Props {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    description: string;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const Form = ({title, setTitle, description, setDescription, handleAdd}: Props) => {
    return (
        <form className="form-container container" onSubmit={(e) => handleAdd(e)}>
            <h1>Form</h1>
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
                <button>Cancel</button>
            </div>
        </form>
    );
}

export default Form;