import React from "react";

import "./NavbarComponent.css";

export default function NavbarComponent({ actions, dispatch, state }) {
  return (
    <div>
      <div className="NavbarComponent">
        <button onClick={() => dispatch(actions.appSetActiveWeek(-1))}>
          Anterior
        </button>
        <button onClick={() => dispatch(actions.appSetActiveWeek(1))}>
          Próximo
        </button>
      </div>
    </div>
  );
}
