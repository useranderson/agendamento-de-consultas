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
    if (!patient._id) {
      return `AppointmentTimeComponent-Content category0`;
    }
    return `AppointmentTimeComponent-Content category${patient._id}`;
  }
  function normalizePatientName(appointment) {
    if (!appointment.patient.name) {
      return appointment.fixedPatient.name;
    }
    return appointment.patient.name;
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
      <div className={verifyClassname(thisAppointment.patient)}>
        {normalizePatientName(thisAppointment)}
      </div>
    </div>
  );
}
