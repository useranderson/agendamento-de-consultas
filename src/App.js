import React, { Component } from "react";

import actions from "./store/actions";
import reducer from "./store/reducer";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import ScheduleComponent from "./components/ScheduleComponent/ScheduleComponent";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialTime: 10,
      finalTime: 18,
      viewOption: 1, // 1: Schedule, 2: Patients
      activeWeek: 0,
      appointments: [],
      selectedWeekday: {}
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
            patient: {}
          });
          _id++;
        }
        day++;
      }
    }
    this.setState({ ...this.state, appointments: appointments });
  }
  render() {
    return (
      <div className="App">
        <HeaderComponent
          actions={actions}
          dispatch={this.dispatch}
          state={this.state}
        />
        <NavbarComponent
          actions={actions}
          dispatch={this.dispatch}
          state={this.state}
        />
        <ScheduleComponent
          actions={actions}
          dispatch={this.dispatch}
          state={this.state}
        />
      </div>
    );
  }
}
