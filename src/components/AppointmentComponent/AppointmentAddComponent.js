import React from "react";

import Button from "../Commons/Button";

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
  async function insertSelectedPatient() {
    await dispatch(actions.appointmentInsertSelectedPatient());
    await await dispatch(actions.appCloseAppointmentPopup());
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
        <Button
          text={state.appointmentLockPatient ? "Fixo" : "Fixar"}
          invertedMargin={true}
          onClickFunc={async () => await dispatch(actions.appointmentSetLockPatient())}
        />
      </div>
      <div className="AppointmentComponent-row">
        <Button
          disabled={getConfirmButton(state.appointmentSelectedPatient)}
          text="Confirmar"
          onClickFunc={async () => insertSelectedPatient()}
        />
      </div>
    </div>
  );
}
