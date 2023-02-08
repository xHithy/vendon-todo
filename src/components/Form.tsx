import React, {Fragment, useEffect, useState} from "react";
import { FormModel } from "../models/FormModel";

interface Props {
    handleFormAdd: (e: React.FormEvent) => void;
    handleFormCancel: (e: React.FormEvent) => void;
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    description: string;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
    form: FormModel;
    valid: boolean;
    setValid: React.Dispatch<React.SetStateAction<boolean>>
}

const Form = ({handleFormAdd, handleFormCancel, title, setTitle, description, setDescription, form, valid, setValid}: Props) => {
    const [error, setError] = useState<string>("");
    useEffect(() => {
        if(title.trim().length < 10) {
            setValid(false);
            setError("Title must be atleast 10 characters");
            return;
        }
        setValid(true);
        setError("");
    }, [setTitle, title, setValid]);

    return (
        <>
            { form.method !== "hidden" &&
                <form className="form-container container" onSubmit={(e) => handleFormAdd(e)}>
                    <h1>{ form.method === "edit" ? "Edit task" : "Add task"}</h1>
                    <input
                        type="text"
                        placeholder="Enter a title for the task"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Enter a description for the task"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                    { !valid &&
                        <span className="error-field">{error}</span>
                    }
                    <div className="button-container">
                        <button type="submit" disabled={!valid}>Save</button>
                        <button onClick={(e) => handleFormCancel(e)}>Cancel</button>
                    </div>
                </form>
            }
        </>
    );
}

export default Form;