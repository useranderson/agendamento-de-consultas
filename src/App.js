import React, { Component } from "react";

import actions from "./store/actions";
import reducer from "./store/reducer";
import HeaderComponent from "./components/HeaderComponent";
import ScheduleComponent from "./components/ScheduleComponent/ScheduleComponent";
import AppointmentComponent from "./components/AppointmentComponent/AppointmentComponent";
import PatientComponent from "./components/PatientComponent/PatientComponent";
import PatientPopupComponent from "./components/PatientPopupComponent/PatientPopupComponent";
import request from "./request";

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
      editPatient: {},
      finalTime: 21,
      initialTime: 10,
      newPatient: {},
      patients: [],
      selectedWeekday: 0,
      viewOption: 1, // 1: Schedule, 2: Patients, 3: Appointment
      weekView: true,
      weekTouchStartX: 0,
      weekTouchMoveX: 0
    };
  }
  dispatch = async newState => {
    await this.setState(await reducer(this.state, newState));
  };
  async componentWillMount() {
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
    await this.setState({ ...this.state, appointments: appointments });
    const patientsData = await request.get("/patient/list");
    const patients = patientsData.data;
    await this.setState({ ...this.state, patients: patients });
  }
  getMainView = option => {
    switch (option) {
      case 1:
        return <ScheduleComponent actions={actions} dispatch={this.dispatch} state={this.state} />;
      case 2:
        return <PatientComponent actions={actions} dispatch={this.dispatch} state={this.state} />;
      case 3:
        return (
          <AppointmentComponent actions={actions} dispatch={this.dispatch} state={this.state} />
        );
      case 4:
        return (
          <PatientPopupComponent actions={actions} dispatch={this.dispatch} state={this.state} />
        );
      default:
        return null;
    } //
  };
  render() {
    return (
      <div className="App">
        <HeaderComponent actions={actions} dispatch={this.dispatch} state={this.state} />
        {this.getMainView(this.state.viewOption)}
      </div>
    );
  }
}
