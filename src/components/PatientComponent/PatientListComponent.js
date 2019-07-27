import React from "react";

import PatientDetailComponent from "./PatientDetailComponent";

// import { Container } from './styles';

export default function PatientListComponent({ actions, dispatch, state }) {
  function verifyPatientDetail(activePatient, patient) {
    if (activePatient._id === patient._id) {
      return (
        <PatientDetailComponent
          actions={actions}
          dispatch={dispatch}
          state={state}
          patient={patient}
        />
      );
    }
    return null;
  }
  return (
    <div className="PatientListComponent">
      {state.patients.map(patient => {
        return (
          <div key={patient._id} className="PatientComponentCard">
            <div
              className="PatientComponentCardFirstrow"
              onClick={() => dispatch(actions.patientSetActivePatient(patient))}
            >
              <div className={`category${patient.category}`} />
              <span>{patient.name}</span>
            </div>
            {verifyPatientDetail(state.activePatient, patient)}
          </div>
        );
      })}
    </div>
  );
}
