import React from "react";

// import { Container } from './styles';

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
    await  dispatch(actions.patientSetActivePatient({}));
  }
  function verifyButtons(getReadOnly) {
    if (getReadOnly) {
      return (
        <button
          className="normalButton"
          onClick={() => dispatch(actions.patientSetEditPatient(patient))}
        >
          Editar
        </button>
      );
    }
    return (
      <>
        <button
          className="normalButton"
          onClick={() => dispatch(actions.patientSetEditPatient(patient))}
        >
          Confirmar
        </button>
        <button className="normalButton" onClick={() => cancelEditPatient()}>
          Cancelar
        </button>
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
