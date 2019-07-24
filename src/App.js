import React, { Component } from "react";

import actions from "./store/actions";
import reducer from "./store/reducer";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import ScheduleComponent from "./components/ScheduleComponent/ScheduleComponent";
import AppointmentComponent from "./components/AppointmentComponent/AppointmentComponent";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeWeek: 0,
      activeAppointment: {},
      appointments: [],
      finalTime: 18,
      initialTime: 10,
      selectedWeekday: 0,
      viewOption: 1, // 1: Schedule, 2: Patients, 3: Appointment
      weekView: true
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
            patient: { name: null }
          });
          _id++;
        }
        day++;
      }
    }
    console.log("Ok");
    this.setState({ ...this.state, appointments: appointments });
  }
  getMainView = option => {
    switch (option) {
      case 1:
        return <ScheduleComponent actions={actions} dispatch={this.dispatch} state={this.state} />;
      case 3:
        return (
          <AppointmentComponent actions={actions} dispatch={this.dispatch} state={this.state} />
        );
      default:
        return null;
    }
  };
  render() {
    return (
      <div className="App">
        <HeaderComponent actions={actions} dispatch={this.dispatch} state={this.state} />
        <NavbarComponent actions={actions} dispatch={this.dispatch} state={this.state} />
        {this.getMainView(this.state.viewOption)}
      </div>
    );
  }
}
