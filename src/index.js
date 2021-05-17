import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/antd/dist/antd.css'
import reportWebVitals from './reportWebVitals';
import HorizontalLoginForm from './HorizontalLoginForm';

ReactDOM.render(
  <React.StrictMode>
    <HorizontalLoginForm />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
