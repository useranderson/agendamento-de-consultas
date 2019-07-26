import React from "react";

// import { Container } from './styles';

export default function AppointmentHeaderComponent({
  actions,
  dispatch,
  state,
  closeOption,
  title
}) {
  async function closeAppointmentPopup() {
    await dispatch(actions.appCloseAppointmentPopup());
    await dispatch(actions.appSetViewOption(closeOption));
  }

  return (
    <div className="AppointmentHeaderComponent">
      <span>{title}</span>
      <button onClick={() => closeAppointmentPopup()}>X</button>
    </div>
  );
}
