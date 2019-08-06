import React from "react";

import "./ScheduleComponent.css";
import WeekComponent from "./WeekComponent";

export default function ScheduleComponent({ actions, dispatch, state }) {
  const { appointments } = state;
  return (
    <>
      <div
        className="ScheduleComponent"
        onTouchStart={event => dispatch(actions.scheduleSetTouchStartX(event.touches[0].pageX))}
        onTouchMove={event => dispatch(actions.scheduleSetTouchMoveX(event.touches[0].pageX))}
        onTouchEnd={() => dispatch(actions.scheduleSetTouchEndX())}
      >
        <WeekComponent
          actions={actions}
          dispatch={dispatch}
          state={state}
          appointments={appointments.filter(appointment => {
            return (
              appointment.week === state.activeWeek &&
              appointment.hour >= state.initialTime &&
              appointment.hour <= state.finalTime
            );
          })}
        />
      </div>
    </>
  );
}
