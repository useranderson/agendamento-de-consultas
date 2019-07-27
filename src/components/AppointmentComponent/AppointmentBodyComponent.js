import React from "react";

import Button from "../Commons/Button";

export default function AppointmentBodyComponent({
  actions,
  dispatch,
  thisAppointment
}) {
  function normalizePatientName(patient) {
    if (!patient.name) {
      return "";
    }
    return patient.name;
  }
  function weekdayNumToText(weekday) {
    const weekdaysText = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
    return weekdaysText[weekday];
  }
  const { day, hour, month, weekday, fixedPatient } = thisAppointment;

  return (
    <div className="AppointmentBodyComponent">
      <div className="AppointmentComponent-row">
        <span>Data:</span>
        <input
          type="text"
          value={`${weekdayNumToText(weekday)} ${day}/${month}/2019`}
          readOnly
        />
      </div>
      <div className="AppointmentComponent-row">
        <span>Horário:</span>
        <input type="text" value={`${hour}:00`} readOnly />
      </div>
      <div className="AppointmentComponent-row">
        <span>Paciente Fixo:</span>
        <input
          type="text"
          value={normalizePatientName(fixedPatient)}
          readOnly
        />
        <Button
          text="Remover"
          onClickFunc={() =>
            dispatch(actions.appRemoveFixedPatientActiveAppointment())
          }
        />
      </div>
    </div>
  );
}
