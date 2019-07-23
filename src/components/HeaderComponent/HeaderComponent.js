import React from "react";

import "./HeaderComponent.css";
import calendarImage from "../../images/calendarImage.png";

export default function HeaderComponent({ actions, dispatch, state }) {
  function getHeaderTitle(state) {
    if (state.viewOption === 1) {
      return "Agenda";
    }
    if (state.viewOption === 2) {
      return "Contatos";
    }
    return 1;
  }
  return (
    <div className="HeaderComponent">
      <span>{getHeaderTitle(state)}</span>
      <button onClick={() => dispatch(actions.appSetViewOption(2))}>
        <img src={calendarImage} alt="Mudar visão" />
      </button>
    </div>
  );
}
