import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


// function init() {
//   if (localStorage.getItem("datakey") === null) {
//     var initData = [];
//     var dataObj = JSON.stringify(initData);
//     localStorage.setItem("dataKey", dataObj);
//   }
// }
// init();
// var DATA = JSON.parse(localStorage.getItem("dataKey"));
const DATA = localStorage.getItem() ? JSON.parse(localStorage.getItem()) : [];

ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));

