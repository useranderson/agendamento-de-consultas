import React from "react";

import "./Button.css";

export default function Button({ text, onClickFunc, disabled, invertedMargin, redStyle }) {
  const verifyRedStyle = redStyle ? "normalButton redStyleButton" : "normalButton";
  const verifyMargin = invertedMargin ? `${verifyRedStyle} invertedMarginButton` : verifyRedStyle;
  const normalizedClassName = disabled ? `${verifyMargin} disabledButton` : verifyMargin;
  return (
    <button className={normalizedClassName} disabled={disabled} onClick={() => onClickFunc()}>
      {text}
    </button>
  );
}
