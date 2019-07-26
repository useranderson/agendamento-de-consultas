import React from "react";

import PopupHeader from "../Commons/PopupHeader";

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
      PatientPopupComponent
    </div>
  );
}
