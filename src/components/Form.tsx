import React from "react";

const Form: React.FC = () => {
    return (
        <div className="form-container container">
            <h1>Form</h1>
            <label>
                Title
                <input type="text" placeholder="Enter a title for the task"/>
            </label>
            <label>
                Description
                <textarea placeholder="Enter a description for the task"></textarea>
            </label>
            <div className="button-container">
                <button>Save</button>
                <button>Cancel</button>
            </div>
        </div>
    );
}

export default Form;