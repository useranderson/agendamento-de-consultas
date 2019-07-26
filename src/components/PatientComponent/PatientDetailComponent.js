import React from "react";

// import { Container } from './styles';

export default function PatientDetailComponent({ patient }) {
  return (
    <div className="PatientDetailComponent">
      <div className="PatientDetailComponentRow">
        <span>Contato:</span> <input type="text" value={patient.contact} />
      </div>
      <div className="PatientDetailComponentRow">
        <span>Categoria:</span> <input type="text" value={patient.category} />
      </div>
      <div className="PatientDetailComponentRow">
        <span>Anotação:</span>{" "}
        <textarea cols="30" rows="10">
          {patient.note}
        </textarea>
      </div>
    </div>
  );
}
