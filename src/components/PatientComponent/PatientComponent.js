import React from "react";

import PatientListComponent from "./PatientListComponent";
import "./PatientComponent.css";

export default function PatientComponent({ actions, dispatch, state }) {
  return (
    <div className="PatientComponent">
      <PatientListComponent actions={actions} dispatch={dispatch} state={state} />
    </div>
  );
}
