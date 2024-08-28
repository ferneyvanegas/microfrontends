import React from "react";
import ReactDOM from "react-dom/client";
import Task from './components/Task';

import "./index.css";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div className="container">
    <Task />
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)