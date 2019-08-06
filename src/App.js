import React, { Component } from "react";

import actions from "./store/actions";
import reducer from "./store/reducer";
import HeaderComponent from "./components/HeaderComponent";
import ScheduleComponent from "./components/ScheduleComponent/ScheduleComponent";
import AppointmentComponent from "./components/AppointmentComponent/AppointmentComponent";
import PatientComponent from "./components/PatientComponent/PatientComponent";
import PatientPopupComponent from "./components/PatientPopupComponent/PatientPopupComponent";
import request from "./request";
import NavbarComponent from "./components/NavbarComponenet";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeWeek: 1,
      activeAppointment: {},
      activePatient: {},
      appointmentDragStart: {},
      appointmentDragEnter: {},
      appointmentLockPatient: false,
      appointmentSelectedPatient: {},
      appointments: [],
      editPatient: {},
      finalTime: 22,
      initialTime: 0,
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
  getToday = date => {
    const appointmentsFiltered = this.state.appointments.filter(appointment => {
      return (
        appointment.day === date.getDate() &&
        appointment.month === date.getMonth() &&
        appointment.year === date.getFullYear() &&
        appointment.hour === 0
      );
    });
    return appointmentsFiltered[0];
  };
  async componentWillMount() {
    const patientsData = await request.get("/patient/list");
    const appointmentsData = await request.get("/appointment/list");

    const patients = patientsData.data;
    const appointments = appointmentsData.data;

    await this.setState({ ...this.state, patients: patients, appointments: appointments });

    const newDate = new Date();
    const today = this.getToday(newDate);
    await this.setState({ activeWeek: today.week });
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
        <NavbarComponent actions={actions} dispatch={this.dispatch} state={this.state} />
      </div>
    );
  }
}
