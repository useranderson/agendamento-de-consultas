import React from "react";

// import { Container } from './styles';

export default function AppointmentBodyComponent({ thisAppointment }) {
  function normalizePatientName(patient) {
    if (patient.name === null) {
      return "";
    }
    return patient.name;
  }
  function weekdayNumToText(weekday) {
    const weekdaysText = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
    return weekdaysText[weekday];
  }
  const { day, hour, month, patient, weekday, fixedPatient } = thisAppointment;
  console.log(thisAppointment);
  return (
    <div className="AppointmentBodyComponent">
      <div className="AppointmentComponent-row">
        <span>Data:</span>
        <input type="text" value={`${weekdayNumToText(weekday)} ${day}/${month}/2019`} readOnly />
      </div>
      <div className="AppointmentComponent-row">
        <span>Horário:</span>
        <input type="text" value={`${hour}:00`} readOnly />
      </div>
      <div className="AppointmentComponent-row">
        <span>Paciente Fixo:</span>
        <input type="text" value={normalizePatientName(fixedPatient)} readOnly />
      </div>
    </div>
  );
}
