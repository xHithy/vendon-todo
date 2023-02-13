import React, { useEffect, useState } from 'react';
import { FormModel } from '../models/FormModel';
import { FORM_METHOD_VALUES} from '../values/FormValues';

interface Props {
    handleFormAdd: (e: React.FormEvent) => void;
    handleFormCancel: (e: React.FormEvent) => void;
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    description: string;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
    form: FormModel;
}

const Form = ({
    handleFormAdd,
    handleFormCancel,
    title,
    setTitle,
    description,
    setDescription,
    form
}: Props) => {
    const [error, setError] = useState<string>('');
    const [valid, setValid] = useState<boolean>(false);
    useEffect(() => {
        if (title.trim().length < 10) {
            setValid(false);
            setError('Title must be atleast 10 characters');
        } else {
            setValid(true);
            setError('');
        }
    }, [title]);

    return (
        <>
            { form.method !== FORM_METHOD_VALUES.HIDDEN &&
                <form className='form-container container flex br-10 col p-20' onSubmit={(e) => handleFormAdd(e)}>
                    <h1>{ form.method === FORM_METHOD_VALUES.EDIT ? 'Edit task' : 'Add task'}</h1>
                    <input
                        type='text'
                        placeholder='Enter a title for the task'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder='Enter a description for the task'
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    >{description}</textarea>
                    { !valid &&
                        <span className='error-field'>{error}</span>
                    }
                    <div className='button-container flex br-10 gap-20 jc-sb'>
                        <button type='submit' disabled={!valid}>Save</button>
                        <button onClick={(e) => handleFormCancel(e)}>Cancel</button>
                    </div>
                </form>
            }
        </>
    );
}

export default Form;