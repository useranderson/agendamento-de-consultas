import React from "react";

import WeekdayComponent from "./WeekdayComponent";
import TimebarComponent from "./TimebarComponent";

export default function WeekComponent({ actions, dispatch, state, appointments }) {
  const weekdays = [0, 1, 2, 3, 4, 5, 6];
  return (
    <div className="WeekComponent">
      <TimebarComponent actions={actions} dispatch={dispatch} state={state} />
      {weekdays.map(weekday => {
        return (
          <WeekdayComponent
            key={weekday}
            actions={actions}
            dispatch={dispatch}
            state={state}
            appointments={appointments.filter(appointment => {
              return appointment.weekday === weekday;
            })}
          />
        );
      })}
    </div>
  );
}
