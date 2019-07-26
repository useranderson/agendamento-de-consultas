import React from "react";

import "./NavbarComponent.css";

export default function NavbarComponent({ actions, dispatch, state }) {
  return (
    <div>
      <div className="NavbarComponent">
        <div className="NavbarComponent-Content">
          <button onClick={() => dispatch(actions.appSetActiveWeek(-1))}>{`<`}</button>
          <span className="NavbarComponent-WeekDetail">De: 1/1 a 7/1</span>
          <button onClick={() => dispatch(actions.appSetActiveWeek(1))}>{`>`}</button>
        </div>
      </div>
    </div>
  );
}
