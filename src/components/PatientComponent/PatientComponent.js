import React from "react";

import "./PatientComponent.css";

export default function PatientComponent({ actions, dispatch, state }) {
  return (
    <div className="PatientComponent">
      {state.patients.map(patient => {
        return (
          <div className="PatientComponentCard">
            <div className="PatientComponentCardFirstrow">
              <div className={`category${patient.category}`} />
              <span>{patient.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
