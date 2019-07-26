import React from "react";

import "./AppointmentComponent.css";

import PopupHeader from "../Commons/PopupHeader";
import AppointmentBodyComponent from "./AppointmentBodyComponent";
import AppointmentAddComponent from "./AppointmentAddComponent";
import AppointmentPatientComponent from "./AppointmentPatientComponent";

// import { Container } from './styles';

export default function AppointmentComponent({ actions, dispatch, state }) {
  if (!state.activeAppointment._id) {
    return null;
  }
  function verifyPatient(patient) {
    if (!patient.name) {
      return (
        <AppointmentAddComponent
          actions={actions}
          dispatch={dispatch}
          state={state}
        />
      );
    }
    return (
      <AppointmentPatientComponent
        actions={actions}
        dispatch={dispatch}
        state={state}
      />
    );
  }
  return (
    <div className="AppointmentComponent">
      <PopupHeader
        actions={actions}
        dispatch={dispatch}
        state={state}
        title="Horário"
        closeOption={1}
      />
      <AppointmentBodyComponent
        actions={actions}
        dispatch={dispatch}
        state={state}
        thisAppointment={state.activeAppointment}
      />
      {verifyPatient(state.activeAppointment.patient)}
    </div>
  );
}
