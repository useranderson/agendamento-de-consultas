export default function reducer(state, action) {
  switch (action.type) {
    //
    case "APP_SET_VIEWOPTION":
      if (!action.option) {
        return state;
      }
      return { ...state, viewOption: action.option };
    //
    case "APP_SET_WEEKVIEW":
      return { ...state, weekView: !state.weekView };
    //
    case "APP_SET_SELECTEDWEEKDAY":
      return { ...state, selectedWeekday: action.selectedWeekday };
    //
    case "APP_SET_ACTIVEAPPOINTMENT":
      return { ...state, activeAppointment: action.activeAppointment };
    //
    case "APPOINTMENT_SET_SELECTEDPATIENT":
      const patients = state.patients.filter(patient => {
        return patient._id === Number(action.patientId);
      });
      return { ...state, appointmentSelectedPatient: patients[0] };
    //
    case "APPOINTMENT_INSERT_SELECTEDPATIENT":
      const newAppointments = state.appointments.map(appointment => {
        if (appointment._id === state.activeAppointment._id) {
          appointment.patient = state.appointmentSelectedPatient;
        }
        return appointment;
      });
      return {
        ...state,
        appointments: newAppointments,
        viewOption: 1,
        appointmentSelectedPatient: {}
      };
    //
    default:
      return state;
  }
}
