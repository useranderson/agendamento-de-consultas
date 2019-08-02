import React from "react";

import Button from "../Commons/Button";

export default function PatientDetailComponent({ actions, dispatch, state, patient }) {
  console.log(patient);
  const getReadOnly = state.editPatient._id === patient._id ? false : true;
  const getEditClasse = getReadOnly ? "patientNoEdited" : "patientEdited";

  async function cancelEditPatient() {
    await dispatch(actions.patientSetEditPatient({}));
    await dispatch(actions.patientSetActivePatient({}));
  }
  async function insertEditPatient() {
    await dispatch(actions.patientInsertEditPatient());
    await cancelEditPatient();
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
        <Button text="Confirmar" onClickFunc={() => insertEditPatient()} />
        <Button text="Cancelar" onClickFunc={() => cancelEditPatient()} redStyle={true} />
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
          onChange={event => dispatch(actions.patientSetEditPatientContact(event.target.value))}
        />
      </div>
      <div className="PatientDetailComponentRow">
        <span>Categoria:</span>

        <select
          className={getEditClasse}
          defaultValue={patient.category}
          disabled={getReadOnly}
          onChange={event => dispatch(actions.patientSetEditPatientCategory(event.target.value))}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div className="PatientDetailComponentRow">
        <span>Anotação:</span>
        <textarea
          className={getEditClasse}
          cols="30"
          rows="10"
          defaultValue={patient.note}
          readOnly={getReadOnly}
          onChange={event => dispatch(actions.patientSetEditPatientNote(event.target.value))}
        />
      </div>
      <div className="PatientDetailComponentRow">{verifyButtons(getReadOnly)}</div>
    </div>
  );
}
