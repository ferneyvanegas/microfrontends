import React from "react";
import ReactDOM from "react-dom/client";
import User from './components/User';

import "./index.css";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div className="container">
    <User />
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)