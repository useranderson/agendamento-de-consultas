import React from "react";

// import { Container } from './styles';

export default function AppointmentHeaderComponent({ actions, dispatch, state }) {
  return (
    <div className="AppointmentHeaderComponent">
      <span>Header</span>
      <button onClick={() => dispatch(actions.appSetViewOption(1))}>X</button>
    </div>
  );
}
