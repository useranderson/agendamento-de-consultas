import React from "react";

import Button from "../Commons/Button";

export default function PatientDetailComponent({
  actions,
  dispatch,
  state,
  patient
}) {
  const getReadOnly = state.editPatient._id === patient._id ? false : true;
  const getEditClasse = getReadOnly ? "patientNoEdited" : "patientEdited";
  async function cancelEditPatient() {
    await dispatch(actions.patientSetEditPatient({}));
    await dispatch(actions.patientSetActivePatient({}));
  }
  function verifyButtons(getReadOnly) {
    if (getReadOnly) {
      return (
        <Button
          text="Editar"
          onClickFunc={() => dispatch(actions.patientSetEditPatient(patient))}
        />
      );
    }
    return (
      <>
        <Button text="Confirmar" onClickFunc={() => null} />
        <Button text="Cancelar" onClickFunc={() => cancelEditPatient()} />
      </>
    );
  }
  return (
    <div className="PatientDetailComponent">
      <div className="PatientDetailComponentRow">
        <span>Contato:</span>
        <input
          className={getEditClasse}
          type="text"
          defaultValue={patient.contact}
          readOnly={getReadOnly}
          onChange={() => console.log("ok")}
        />
      </div>
      <div className="PatientDetailComponentRow">
        <span>Categoria:</span>
        <input
          className={getEditClasse}
          type="text"
          defaultValue={patient.category}
          readOnly={getReadOnly}
          onChange={() => console.log("ok")}
        />
      </div>
      <div className="PatientDetailComponentRow">
        <span>Anotação:</span>
        <textarea
          className={getEditClasse}
          cols="30"
          rows="10"
          defaultValue={patient.note}
          readOnly={getReadOnly}
          onChange={() => console.log("ok")}
        />
      </div>
      <div className="PatientDetailComponentRow">
        {verifyButtons(getReadOnly)}
      </div>
    </div>
  );
}
