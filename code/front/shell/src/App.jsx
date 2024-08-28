import React from "react";
import ReactDOM from "react-dom/client";
import Task from 'tasks/Task';
import User from 'users/User';
import Report from 'reports/Report';

import "./index.css";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div className="container">
    <Task />
    <User />
    <Report />
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)