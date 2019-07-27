import React from "react";

import Button from "../Commons/Button";

export default function AppointmentPatientComponents({ actions, dispatch, state }) {
  async function activeMovePatient() {
    await dispatch(actions.appointmentSetPatientStart(state.activeAppointment));
    await dispatch(actions.appCloseAppointmentPopup());
  }
  return (
    <div className="AppointmentPatientComponents">
      <div className="AppointmentComponent-row">
        <span>Paciente:</span>
        <input type="text" value={`${state.activeAppointment.patient.name}`} readOnly />
      </div>
      <div className="AppointmentComponent-row">
        <span>Anotação:</span>
        <input type="text" value={`${state.activeAppointment.patient.note}`} readOnly />
      </div>
      <div className="AppointmentComponent-row">
        <Button text="Mover" onClickFunc={async () => activeMovePatient()} />
        <Button
          text="Remover"
          redStyle={true}
          onClickFunc={async () => dispatch(actions.appRemovePatientActiveAppointment())}
        />
      </div>
    </div>
  );
}
