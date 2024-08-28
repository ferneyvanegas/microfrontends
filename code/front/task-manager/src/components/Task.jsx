import React, { useState } from "react";

import './Task.css';

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim() !== '') {
      setTasks(prevTasks => [...prevTasks, taskText]);
      setTaskText(''); // Limpiar el campo de entrada después de agregar la tarea
    }
  }

  const delTask = (index) => {
    setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
  }
  

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col text-center mb-4">
          <h3 className="text-primary">Gestión de Tareas</h3>
        </div>
      </div>
      
      <div className="row justify-content-center">
        <div className="col-8 col-md-6 col-lg-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Escribe una tarea..."
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
            />
            <button className="btn btn-primary" onClick={addTask}>
              Agregar
            </button>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        {tasks.map((task, index) => (
          <div key={index} className="col-12 col-md-8 col-lg-6">
            <div className="alert alert-success d-flex justify-content-between align-items-center">
              <span>{task}</span>
              <button className="btn btn-sm btn-outline-danger" onClick={() => {delTask(index)}}>
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Task;