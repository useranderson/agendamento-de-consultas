import React from "react";

// import { Container } from './styles';

export default function AppointmentComponent({
  actions,
  dispatch,
  state,
  appointments,
  thisAppointment
}) {
  return (
    <div className="AppointmentComponent" onClick={() => console.log("Ok")}>
      <div className="AppointmentComponent-Content">{thisAppointment.patient.name}</div>
    </div>
  );
}
