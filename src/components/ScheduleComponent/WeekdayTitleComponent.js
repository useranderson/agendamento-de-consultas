import React from "react";

// import { Container } from './styles';

export default function WeekdayTitleComponent({ actions, dispatch, state, appointment }) {
  const { weekday, day, month } = appointment;
  function weekdayNumToText(weekday) {
    const weekdaysText = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
    return weekdaysText[weekday];
  }
  async function setSelectedWeekHandle(weekday) {
    await dispatch(actions.appSetSelectedWeekday(weekday));
    await dispatch(actions.appSetWeekView());
  }
  return (
    <div
      className="AppointmentComponent WeekdayTitleComponent"
      onClick={() => {
        setSelectedWeekHandle(weekday);
      }}
    >
      <strong>{`${weekdayNumToText(weekday)} ${day}/${month}`}</strong>
    </div>
  );
}
//<button onClick={() => dispatch(actions.appSetViewOption(2))}>
