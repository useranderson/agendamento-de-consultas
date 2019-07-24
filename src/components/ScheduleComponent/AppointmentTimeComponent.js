import React from "react";

// import { Container } from './styles';

export default function AppointmentTimeComponent({
  actions,
  dispatch,
  state,
  appointments,
  thisAppointment
}) {
  async function setShowActiveAppointment(appointment) {
    await dispatch(actions.appSetViewOption(3));
    await dispatch(actions.appSetActiveAppointment(appointment));
  }
  return (
    <div
      className="AppointmentTimeComponent"
      onClick={() => setShowActiveAppointment(thisAppointment)}
    >
      <div className="AppointmentTimeComponent-Content">{thisAppointment.patient.name}</div>
    </div>
  );
}
