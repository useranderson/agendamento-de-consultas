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

    //
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
    case "APPOINTMENT_SET_PATIENTSTART":
      return { ...state, appointmentDragStart: action.appointment };
    //
    case "APPOINTMENT_SET_PATIENTENTER":
      return { ...state, appointmentDragEnter: action.appointment };
    //
    case "APPOINTMENT_SET_PATIENTEND":
      if (state.appointmentDragEnter.patient._id) {
        return {
          ...state,
          appointmentDragStart: {},
          appointmentDragEnter: {}
        };
      }
      if (state.appointmentDragStart._id === state.appointmentDragEnter._id) {
        return {
          ...state,
          appointmentDragStart: {},
          appointmentDragEnter: {}
        };
      }
      const newAppointments___ = state.appointments.map(appointment => {
        if (appointment._id === state.appointmentDragEnter._id) {
          appointment.patient = state.appointmentDragStart.patient;
        }
        return appointment;
      });
      const newAppointments____ = newAppointments___.map(appointment => {
        if (appointment._id === state.appointmentDragStart._id) {
          appointment.patient = {};
        }

        return appointment;
      });
      return {
        ...state,
        appointments: newAppointments____,
        appointmentDragStart: {},
        appointmentDragEnter: {}
      };
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
    case "PATIENT_SET_ACTIVEPATIENT":
      if (state.activePatient._id === action.patient._id) {
        return { ...state, activePatient: {} };
      }
      return { ...state, activePatient: action.patient };
    //
    case "SCHEDULE_SET_TOUCHSTARTX":
      return { ...state, weekTouchStartX: action.x };
    //
    case "SCHEDULE_SET_TOUCHMOVEX":
      return { ...state, weekTouchMoveX: action.x };
    //
    case "SCHEDULE_SET_TOUCHENDX":
      if (state.weekTouchStartX - state.weekTouchMoveX > 100) {
        return { ...state, activeWeek: state.activeWeek + 1 };
      }
      if (
        state.weekTouchStartX - state.weekTouchMoveX < -100 &&
        state.activeWeek > 0
      ) {
        return { ...state, activeWeek: state.activeWeek - 1 };
      }
      return state;
    //
    case "NEWPATIENT_SET_PATIENTNAME":
      return {
        ...state,
        newPatient: { ...state.newPatient, name: action.name }
      };
    //
    case "NEWPATIENT_SET_PATIENTCONTACT":
      return {
        ...state,
        newPatient: { ...state.newPatient, contact: action.contact }
      };
    //
    case "NEWPATIENT_SET_PATIENTCATEGORY":
      return {
        ...state,
        newPatient: { ...state.newPatient, category: action.category }
      };
    //
    case "NEWPATIENT_SET_PATIENTNOTE":
      return {
        ...state,
        newPatient: { ...state.newPatient, note: action.note }
      };
    //
    case "NEWPATIENT_INSERT_PATIENT":
      const normalizeCategory = !state.newPatient.category
        ? 1
        : state.newPatient.category + 1;

      const newPatient = state.newPatient;
      newPatient._id = state.patients.length + 1;
      newPatient.category = normalizeCategory;
      return {
        ...state,
        patients: [...state.patients, newPatient]
      };
    //
    case "PATIENT_SET_EDITPATIENT":
      console.log(action.patient)
      return {
        ...state,
        editPatient: action.patient
      };
    //
    default:
      return state;
  }
}
