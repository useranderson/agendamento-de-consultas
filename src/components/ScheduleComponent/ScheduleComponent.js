import React from "react";

import "./ScheduleComponent.css";
import WeekComponent from "./WeekComponent";
import NavbarComponent from "./NavbarComponent";

export default function ScheduleComponent({ actions, dispatch, state }) {
  const { appointments } = state;
  return (
    <>
      <NavbarComponent actions={actions} dispatch={dispatch} state={state} />
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
    </>
  );
}
