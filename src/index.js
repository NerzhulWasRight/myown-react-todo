import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const DATA = [
  { id: "todo-0", name: "Drink some water", completed: false },
  { id: "todo-1", name: "Feed my dog", completed: true },
  { id: "todo-2", name: "Write some code", completed: false }
];

ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));