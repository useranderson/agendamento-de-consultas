import React from "react";

import AppointmentComponent from "./AppointmentComponent";
import WeekdayTitleComponent from "./WeekdayTitleComponent";

export default function WeekdayComponent({
  actions,
  dispatch,
  state,
  appointments
}) {
  const appointmentWeekdays = [];
  appointmentWeekdays.push(appointments[0]);
  return (
    <div className="WeekdayComponent">
      {appointmentWeekdays.map(appointmentWeekday => {
        return (
          <WeekdayTitleComponent
            key={appointmentWeekday._id}
            actions={actions}
            dispatch={dispatch}
            state={state}
            appointment={appointmentWeekday}
          />
        );
      })}
      {appointments.map(appointment => {
        return (
          <AppointmentComponent
            key={appointment._id}
            actions={actions}
            dispatch={dispatch}
            state={state}
            appointments={appointments}
            thisAppointment={appointment}
          />
        );
      })}
    </div>
  );
}
