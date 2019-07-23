import React from "react";

import AppointmentComponent from "./AppointmentComponent";

export default function WeekdayComponent({ actions, dispatch, state, appointments }) {
  return (
    <div className="WeekdayComponent">
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
