import React from "react";

import "./Button.css";

export default function Button({ text, onClickFunc, disabled }) {
  const normalizedClassName = disabled
    ? "normalButton disabledButton"
    : "normalButton";
  return (
    <button
      className={normalizedClassName}
      disabled={disabled}
      onClick={() => onClickFunc()}
    >
      {text}
    </button>
  );
}
