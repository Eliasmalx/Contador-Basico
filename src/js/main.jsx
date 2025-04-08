import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
//import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/index.css";
// import Home from './components/Home';
import Counter from './components/SecondsCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Counter/>
);
