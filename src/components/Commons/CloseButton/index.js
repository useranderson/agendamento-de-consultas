import React from "react";

import "./CloseButton.css";

export default function CloseButton({ onClickFunc }) {
  return (
    <button className="closeButton" onClick={() => onClickFunc()}>
      x
    </button>
  );
}
