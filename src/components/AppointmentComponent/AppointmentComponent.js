import React from "react";

import "./AppointmentComponent.css";

import AppointmentHeaderComponent from "./AppointmentHeaderComponent";
import AppointmentBodyComponent from "./AppointmentBodyComponent";
import AppointmentAddComponent from "./AppointmentAddComponent";

// import { Container } from './styles';

export default function AppointmentComponent({ actions, dispatch, state }) {
  if (!state.activeAppointment._id) {
    return null;
  }
  return (
    <div className="AppointmentComponent">
      <AppointmentHeaderComponent actions={actions} dispatch={dispatch} state={state} />
      <AppointmentBodyComponent thisAppointment={state.activeAppointment} />
      <AppointmentAddComponent actions={actions} dispatch={dispatch} state={state} />
    </div>
  );
}
