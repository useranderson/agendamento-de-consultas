import React, { Component } from "react";

import actions from "./store/actions";
import reducer from "./store/reducer";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import ScheduleComponent from "./components/ScheduleComponent/ScheduleComponent";
import AppointmentComponent from "./components/AppointmentComponent/AppointmentComponent";
import PatientComponent from "./components/PatientComponent/PatientComponent";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeWeek: 0,
      activeAppointment: {},
      activePatient: {},
      appointmentDragStart: {},
      appointmentDragEnter: {},
      appointmentLockPatient: false,
      appointmentSelectedPatient: {},
      appointments: [],
      finalTime: 18,
      initialTime: 10,
      selectedWeekday: 0,
      patients: [
        {
          _id: 1,
          name: "Anderson Amorim",
          contact: "(21) 9 8146-5003",
          note: "Nota do Anderson de Amorim",
          category: 1
        },
        {
          _id: 2,
          name: "Jessica Calegaro",
          contact: "(21) 9 8146-5003",
          note: "Nota do Jessica Calegaro",
          category: 2
        },
        {
          _id: 3,
          name: "Luana Amorim",
          contact: "(21) 9 8146-5003",
          note: "Nota do Luana de Amorim",
          category: 3
        }
      ],
      viewOption: 2, // 1: Schedule, 2: Patients, 3: Appointment
      weekView: true,
      weekTouchStartX: 0,
      weekTouchMoveX: 0
    };
  }
  dispatch = async newState => {
    await this.setState(reducer(this.state, newState));
  };
  componentWillMount() {
    let day = 1;
    let _id = 1;
    const appointments = [];
    for (let k = 0; k < 4; k++) {
      for (let j = 0; j < 7; j++) {
        for (let i = this.state.initialTime; i <= this.state.finalTime; i++) {
          appointments.push({
            _id: _id,
            hour: i,
            weekday: j,
            week: k,
            day: day,
            month: 1,
            patient: {},
            fixedPatient: {}
          });
          _id++;
        }
        day++;
      }
    }

    this.setState({ ...this.state, appointments: appointments });
  }
  getMainView = option => {
    switch (option) {
      case 1:
        return (
          <ScheduleComponent
            actions={actions}
            dispatch={this.dispatch}
            state={this.state}
          />
        );
      case 2:
        return (
          <PatientComponent
            actions={actions}
            dispatch={this.dispatch}
            state={this.state}
          />
        );
      case 3:
        return (
          <AppointmentComponent
            actions={actions}
            dispatch={this.dispatch}
            state={this.state}
          />
        );
      default:
        return null;
    }
  };
  render() {
    return (
      <div className="App">
        <HeaderComponent
          actions={actions}
          dispatch={this.dispatch}
          state={this.state}
        />
        {this.getMainView(this.state.viewOption)}
      </div>
    );
  }
}
