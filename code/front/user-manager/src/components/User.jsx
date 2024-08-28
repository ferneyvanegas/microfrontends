import React, { useState } from "react";

import './User.css';

const User = () => {
  const [users, setUsers] = useState([]);
  const [userText, setUserText] = useState('');

  const addUser = () => {
    if (userText.trim() !== '') {
      setUsers(prevUsers => [...prevUsers, userText]);
      setUserText('');
    }
  }

  const delUser = (index) => {
    setUsers(prevTasks => prevTasks.filter((_, i) => i !== index));
  }
  

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col text-center mb-4">
          <h3 className="text-primary">Gestión de Usuarios</h3>
        </div>
      </div>
      
      <div className="row justify-content-center">
        <div className="col-8 col-md-6 col-lg-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Escribe una tarea..."
              value={userText}
              onChange={(e) => setUserText(e.target.value)}
            />
            <button className="btn btn-warning" onClick={addUser}>
              Agregar
            </button>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        {users.map((user, index) => (
          <div key={index} className="col-12 col-md-8 col-lg-6">
            <div className="alert alert-warning d-flex justify-content-between align-items-center">
              <span>{user}</span>
              <button className="btn btn-sm btn-outline-danger" onClick={() => {delUser(index)}}>
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default User;