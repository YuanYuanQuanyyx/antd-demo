import React from 'react';
import './App.css';
import NormalLoginForm from './NormalLoginForm';

const div1 = {
  width: "300px",
  margin: "30px auto",
  minHeight: "200px",
  boxSizing: "border-box"
};

const App = () => (
  <div style = {div1}>
    <NormalLoginForm/>
  </div>
);

export default App;