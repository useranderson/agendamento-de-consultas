import React from "react";

// import { Container } from './styles';

export default function WeekdayTitleComponent({
  actions,
  dispatch,
  state,
  appointment
}) {
  const { weekday, day, month } = appointment;
  function weekdayNumToText(weekday) {
    const weekdaysText = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
    return weekdaysText[weekday];
  }
  return (
    <div
      className="AppointmentComponent WeekdayTitleComponent"
      onClick={() => {
        dispatch(actions.appSetSelectedWeekday(5));
        //dispatch(actions.appSetWeekView());
      }}
    >
      <div>
        <strong>{`${weekdayNumToText(weekday)} ${day}/${month}`}</strong>
      </div>
    </div>
  );
}
//<button onClick={() => dispatch(actions.appSetViewOption(2))}>
