import React from "react";

// import { Container } from './styles';

export default function AppointmentAddComponent({ actions, dispatch, state }) {
  function selectOnClick(event) {
    event.target.options[0].setAttribute("disabled", true);
  }
  function getConfirmButton(patient) {
    if (!patient._id) {
      return true;
    }
    return false;
  }
  const { patients } = state;
  return (
    <div className="AppointmentAddComponent">
      <div className="AppointmentComponent-row">
        <span>Adicionar:</span>
        <select
          onClick={event => selectOnClick(event, actions, dispatch, state)}
          onChange={event =>
            dispatch(
              actions.appointmentSetSelectedPatient(
                event.target.options[event.target.options.selectedIndex].id
              )
            )
          }
        >
          <option>Selecione um paciente</option>
          {patients.map(patient => {
            return (
              <option key={patient._id} id={patient._id}>
                {patient.name}
              </option>
            );
          })}
        </select>
        <button onClick={() => dispatch(actions.appointmentSetLockPatient())}>
          {state.appointmentLockPatient ? "Fixo" : "Fixar"}
        </button>
      </div>
      <div className="AppointmentComponent-row">
        <button
          disabled={getConfirmButton(state.appointmentSelectedPatient)}
          className={getConfirmButton(state.appointmentSelectedPatient) ? "disabled" : ""}
          onClick={() => dispatch(actions.appointmentInsertSelectedPatient())}
        >
          Confirmar
        </button>
      </div>
    </div>
  );
}
