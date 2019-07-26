import React from "react";

// import { Container } from './styles';

export default function PatientDetailComponent() {
  return (
    <div className="PatientDetailComponent">
      <div className="PatientDetailComponentRow">
        <span>Contato:</span> <input type="text" value="21 9 8156-5003" />
      </div>
      <div className="PatientDetailComponentRow">Categoria: Categoria 1</div>
      <div className="PatientDetailComponentRow">
        Anotação: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis neque ipsa
        veritatis facere distinctio! Ea voluptatum odio dolorum accusamus quibusdam facilis
        praesentium! Culpa dolorem consectetur porro voluptatum distinctio perferendis amet!
      </div>
    </div>
  );
}
