import React from 'react';
import List from "./components/List";
import Form from "./components/Form";
import './styles/style.css';

const App: React.FC = () => {
  return (
    <div className="main-container">
      <List />
      <Form />
    </div>
  );
}

export default App;
