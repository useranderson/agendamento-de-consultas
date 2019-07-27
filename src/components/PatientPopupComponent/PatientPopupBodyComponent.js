import React from "react";

// import { Container } from './styles';

export default function PatientPopupBodyComponent({
  actions,
  dispatch,
  state
}) {
  async function insertNewPatient() {
    await dispatch(actions.newPatientInsertPatient());
    await dispatch(actions.appSetViewOption(2));
  }
  return (
    <div className="AppointmentBodyComponent">
      <div className="AppointmentComponent-row">
        <span>Nome:</span>
        <input
          type="text"
          onChange={event =>
            dispatch(actions.newPatientSetPatientName(event.target.value))
          }
        />
      </div>
      <div className="AppointmentComponent-row">
        <span>Contato:</span>
        <input
          type="text"
          onChange={event =>
            dispatch(actions.newPatientSetPatientContact(event.target.value))
          }
        />
      </div>
      <div className="AppointmentComponent-row">
        <span>Categoria:</span>
        <select
          onChange={event =>
            dispatch(
              actions.newPatientSetPatientCategory(event.target.selectedIndex)
            )
          }
        >
          <option id={1} value="1">
            Categoria 1
          </option>
          <option id={2} value="2">
            Categoria 2
          </option>
          <option id={3} value="3">
            Categoria 3
          </option>
        </select>
      </div>
      <div className="AppointmentComponent-row">
        <span>Anotação:</span>
        <textarea
          cols="30"
          rows="3"
          onChange={event =>
            dispatch(actions.newPatientSetPatientNote(event.target.value))
          }
        />
      </div>
      <div className="AppointmentComponent-row">
        <button onClick={() => insertNewPatient()}>Confirmar</button>
      </div>
    </div>
  );
}
