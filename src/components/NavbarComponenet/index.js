import React from "react";

import "./NavbarComponent.css";
import bt_config from "../../images/bt_config.png";
import bt_calendar from "../../images/bt_calendar.png";
import bt_patients from "../../images/bt_patients.png";

export default function NavbarComponent({ actions, dispatch, state }) {
  return (
    <div>
      <div className="NavbarComponent">
        <div className="NavbarComponent-Content">
          <button
            className="NavbarSideIcons"
            onClick={() => dispatch(actions.appSetActiveWeek(-1))}
          >{`<`}</button>
          <button className="NavbarNormalIcons">
            <img className="NavbarIcon" src={bt_calendar} />
          </button>
          <button className="NavbarNormalIcons">
            <img className="NavbarIcon" src={bt_patients} />
          </button>
          <button className="NavbarNormalIcons">
            <img className="NavbarIcon" src={bt_config} />
          </button>
          <button
            className="NavbarSideIcons"
            onClick={() => dispatch(actions.appSetActiveWeek(1))}
          >{`>`}</button>
        </div>
      </div>
    </div>
  );
}
