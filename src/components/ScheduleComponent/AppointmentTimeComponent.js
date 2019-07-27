import React from "react";

// import { Container } from './styles';

export default function AppointmentTimeComponent({
  actions,
  dispatch,
  state,
  appointments,
  thisAppointment
}) {
  async function dragStartHandle(appointment) {
    await dispatch(actions.appointmentSetPatientStart(appointment));
  }
  async function dragEnterHandle(appointment) {
    await dispatch(actions.appointmentSetPatientEnter(appointment));
  }
  async function dragEndHandle(appointment) {
    await dispatch(actions.appointmentSetPatientEnd());
  }
  function verifyDropEnter(appointment, thisAppointment) {
    if (appointment._id === thisAppointment._id) {
      return "AppointmentTimeComponent-Content DropEnter";
    }
    return "AppointmentTimeComponent-Content";
  }
  function verifyClassname(patient) {
    const AppointmentClassName = verifyDropEnter(
      state.appointmentDragEnter,
      thisAppointment
    );

    if (!patient._id) {
      return `${AppointmentClassName} category0`;
    }
    return `${AppointmentClassName} category${patient.category}`;
  }
  function normalizePatientName(appointment) {
    if (!appointment.patient.name) {
      return appointment.fixedPatient.name;
    }
    return appointment.patient.name;
  }
  async function setShowActiveAppointment(appointment) {
    if (!state.appointmentDragStart._id) {
      await dispatch(actions.appSetViewOption(3));
      await dispatch(actions.appSetActiveAppointment(appointment));
      return null;
    }
    await dispatch(actions.appointmentSetPatientEnter(appointment));
    await dispatch(actions.appointmentSetPatientEnd());
  }
  return (
    <div
      draggable={true}
      onDragStart={() => dragStartHandle(thisAppointment)}
      onDragEnter={() => dragEnterHandle(thisAppointment)}
      onDragEnd={() => dragEndHandle(thisAppointment)}
      className="AppointmentTimeComponent"
      onClick={() => setShowActiveAppointment(thisAppointment)}
    >
      <div className={verifyClassname(thisAppointment.patient)}>
        {normalizePatientName(thisAppointment)}
      </div>
    </div>
  );
}
