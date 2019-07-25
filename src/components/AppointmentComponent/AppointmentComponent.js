import React from "react";

import "./AppointmentComponent.css";

import AppointmentHeaderComponent from "./AppointmentHeaderComponent";
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
      <AppointmentHeaderComponent
        actions={actions}
        dispatch={dispatch}
        state={state}
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
