import React from "react";

import "./ScheduleComponent.css";
import WeekComponent from "./WeekComponent";

export default function ScheduleComponent({ actions, dispatch, state }) {
  const { appointments } = state;
  return (
    <div className="ScheduleComponent">
      <WeekComponent
        actions={actions}
        dispatch={dispatch}
        state={state}
        appointments={appointments.filter(appointment => {
          return appointment.week === state.activeWeek;
        })}
      />
    </div>
  );
}
