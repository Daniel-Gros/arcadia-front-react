import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.sass';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);

reportWebVitals();