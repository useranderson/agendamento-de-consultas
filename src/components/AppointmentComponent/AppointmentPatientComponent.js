import React from "react";

// import { Container } from './styles';

export default function AppointmentPatientComponents({
  actions,
  dispatch,
  state
}) {
  async function activeMovePatient() {
    await dispatch(actions.appointmentSetPatientStart(state.activeAppointment));
    await dispatch(actions.appCloseAppointmentPopup());
  }
  return (
    <div className="AppointmentPatientComponents">
      <div className="AppointmentComponent-row">
        <span>Paciente:</span>
        <input
          type="text"
          value={`${state.activeAppointment.patient.name}`}
          readOnly
        />
      </div>
      <div className="AppointmentComponent-row">
        <span>Anotação:</span>
        <input
          type="text"
          value={`${state.activeAppointment.patient.note}`}
          readOnly
        />
      </div>
      <div className="AppointmentComponent-row">
        <button onClick={async () => activeMovePatient()}>Mover</button>
        <button
          onClick={async () =>
            dispatch(actions.appRemovePatientActiveAppointment())
          }
        >
          Remover
        </button>
      </div>
    </div>
  );
}
