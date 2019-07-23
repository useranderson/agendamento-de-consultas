import React from "react";

import AppointmentComponent from "./AppointmentComponent";

export default function WeekdayComponent({ actions, dispatch, state, appointments }) {
  const appointmentWeekdays = [];
  appointmentWeekdays.push(appointments[0]);
  return (
    <div className="WeekdayComponent">
      {appointmentWeekdays.map(appointmentWeekday => {
        return (
          <div className="AppointmentComponent " key={appointmentWeekday._id}>
            <div className="AppointmentComponent-Content">
              <strong>a</strong>
            </div>
          </div>
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
