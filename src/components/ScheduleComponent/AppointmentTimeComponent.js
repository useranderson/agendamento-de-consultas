import React from "react";

// import { Container } from './styles';

export default function AppointmentTimeComponent({
  actions,
  dispatch,
  state,
  appointments,
  thisAppointment
}) {
  function verifyClassname(patient) {
    return `AppointmentTimeComponent-Content category${patient._id}`;
  }
  async function setShowActiveAppointment(appointment) {
    await dispatch(actions.appSetViewOption(3));
    await dispatch(actions.appSetActiveAppointment(appointment));
  }
  return (
    <div
      className="AppointmentTimeComponent"
      onClick={() => setShowActiveAppointment(thisAppointment)}
    >
      <div className={verifyClassname(thisAppointment.patient)}>{thisAppointment.patient.name}</div>
    </div>
  );
}
