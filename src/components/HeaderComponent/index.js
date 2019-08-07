import React from "react";

import "./HeaderComponent.css";
import calendarImage from "../../images/calendarImage.png";
import patientsImage from "../../images/patientsImage.png";

export default function HeaderComponent({ actions, dispatch, state }) {
  function getHeaderOptions(state) {
    if (state.viewOption === 2) {
      return { title: "Contatos", changeNumber: 1, image: calendarImage };
    }
    return { title: "Agenda", changeNumber: 2, image: patientsImage };
  }
  const headerOptions = getHeaderOptions(state);

  return (
    <div className="HeaderComponent">
      <span>{headerOptions.title}</span>
    </div>
  );
}
