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
    case "APP_SET_ACTIVEWEEK":
      if (state.activeWeek + action.numChange >= 0) {
        return { ...state, activeWeek: state.activeWeek + action.numChange };
      }
      return state;

    //
    case "APP_CLOSE_APPOINTMENTPOPUP":
      return {
        ...state,
        viewOption: 1,
        activeAppointment: {},
        appointmentSelectedPatient: {},
        appointmentLockPatient: false
      };
    //
    case "APP_REMOVE_PATIENTACTIVEAPPOINTMENT":
      const newAppointments_ = state.appointments.map(appointment => {
        if (appointment._id === state.activeAppointment._id) {
          appointment.patient = {};
        }
        return appointment;
      });
      return { ...state, appointments: newAppointments_ };
    //
    case "APP_REMOVE_PATIENTFIXEDACTIVEAPPOINTMENT":
      const newAppointments__ = state.appointments.map(appointment => {
        if (
          appointment.hour === state.activeAppointment.hour &&
          appointment.weekday === state.activeAppointment.weekday
        ) {
          appointment.fixedPatient = {};
          if (
            appointment.month * 100 + appointment.day >=
            state.activeAppointment.month * 100 + state.activeAppointment.day
          ) {
            appointment.patient = {};
          }
        }
        return appointment;
      });
      return { ...state, appointments: newAppointments__ };

    //APP_REMOVE_PATIENTFIXEDACTIVEAPPOINTMENT
    case "APPOINTMENT_SET_LOCKPATIENT":
      return {
        ...state,
        appointmentLockPatient: !state.appointmentLockPatient
      };
    //
    case "APPOINTMENT_SET_SELECTEDPATIENT":
      const patients = state.patients.filter(patient => {
        return patient._id === Number(action.patientId);
      });
      return { ...state, appointmentSelectedPatient: patients[0] };
    //
    case "APPOINTMENT_INSERT_SELECTEDPATIENT":
      const newAppointments = state.appointments.map(appointment => {
        if (state.appointmentLockPatient) {
          if (
            appointment.hour === state.activeAppointment.hour &&
            appointment.weekday === state.activeAppointment.weekday
          ) {
            appointment.patient = state.appointmentSelectedPatient;
            appointment.fixedPatient = state.appointmentSelectedPatient;
          }
        } else {
          if (appointment._id === state.activeAppointment._id) {
            appointment.patient = state.appointmentSelectedPatient;
          }
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
