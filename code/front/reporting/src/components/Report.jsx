import React, { useState } from "react";

import './Report.css';

const Report = () => {
  const [reports, setReports] = useState(['Tareas', 'Usuarios', 'Tareas por Usuario']);
  

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col text-center mb-4">
          <h3 className="text-primary">Reportes</h3>
        </div>
      </div>
      
      <div className="row justify-content-center mt-4">
        {reports.map((report, index) => (
          <div key={index} className="col-12 col-md-8 col-lg-6">
            <div className="alert alert-danger d-flex justify-content-between align-items-center">
              <span>{report}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Report;