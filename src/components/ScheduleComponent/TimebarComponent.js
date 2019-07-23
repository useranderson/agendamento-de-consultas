import React from "react";

export default function TimebarComponent({ actions, dispatch, state }) {
  const hours = [];
  for (let i = state.initialTime; i <= state.finalTime; i++) {
    hours.push(i);
  }
  return (
    <div>
      <div className="AppointmentComponent WeekdayTitleComponent">
        <div className="AppointmentComponent-Content timeBar" />
      </div>
      {hours.map(hour => {
        return (
          <div className="AppointmentComponent " key={hour}>
            <div className="AppointmentComponent-Content timeBar">
              <strong>{`${hour}:00`}</strong>
            </div>
          </div>
        );
      })}
    </div>
  );
}
