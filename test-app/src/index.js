import React from 'react';
import ReactDOM from 'react-dom/client';
import img from "./minion.jpg";
//import './index.css';
import App from './Container/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
<img className="logo" src={img} alt='logo'/>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

