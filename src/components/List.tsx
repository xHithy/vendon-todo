import React from "react";

const List: React.FC = () => {
    return (
        <div className="list-container container">
            <h1>Task list</h1>
            <div className="task-item">
                <text>
                    <h2>Task number one</h2>
                    <p>This is a detailed description for task number one.</p>
                </text>
                <div className="button-container">
                    <button>Complete</button>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
            <div className="task-item">
                <text>
                    <h2>Task number one</h2>
                    <p>This is a detailed description for task number one.</p>
                </text>
                <div className="button-container">
                    <button>Complete</button>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default List;
