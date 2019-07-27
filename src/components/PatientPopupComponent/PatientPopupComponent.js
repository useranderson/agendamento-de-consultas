import React from "react";

import PopupHeader from "../Commons/PopupHeader";
import PatientPopupBodyComponent from "./PatientPopupBodyComponent";

export default function PatientPopupComponent({ actions, dispatch, state }) {
  return (
    <div className="AppointmentComponent">
      <PopupHeader
        actions={actions}
        dispatch={dispatch}
        state={state}
        title="Paciente"
        closeOption={2}
      />
      <PatientPopupBodyComponent
        actions={actions}
        dispatch={dispatch}
        state={state}
      />
    </div>
  );
}
