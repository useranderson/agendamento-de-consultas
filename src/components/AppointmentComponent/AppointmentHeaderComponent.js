import React from "react";

// import { Container } from './styles';

export default function AppointmentHeaderComponent({
  actions,
  dispatch,
  state
}) {
  async function closeAppointmentPopup() {
    await dispatch(actions.appCloseAppointmentPopup());
    await dispatch(actions.appSetViewOption(1));
  }

  return (
    <div className="AppointmentHeaderComponent">
      <span>Horário</span>
      <button onClick={() => closeAppointmentPopup()}>X</button>
    </div>
  );
}
