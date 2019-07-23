import React from "react";

// import { Container } from './styles';

export default function WeekdayTitleComponent({ appointment }) {
  const { weekday, day, month } = appointment;
  function weekdayNumToText(weekday) {
    const weekdaysText = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
    return weekdaysText[weekday];
  }
  return (
    <div className="AppointmentComponent WeekdayTitleComponent">
      <div>
        <strong>{`${weekdayNumToText(weekday)} ${day}/${month}`}</strong>
      </div>
    </div>
  );
}
