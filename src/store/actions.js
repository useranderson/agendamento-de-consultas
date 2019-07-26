export default {
  appSetViewOption: option => {
    return { type: "APP_SET_VIEWOPTION", option };
  },
  appSetSelectedWeekday: selectedWeekday => {
    return {
      type: "APP_SET_SELECTEDWEEKDAY",
      selectedWeekday: Number(selectedWeekday)
    };
  },
  appSetWeekView: () => {
    return { type: "APP_SET_WEEKVIEW" };
  },
  appSetActiveAppointment: activeAppointment => {
    return { type: "APP_SET_ACTIVEAPPOINTMENT", activeAppointment };
  },
  appSetActiveWeek: numChange => {
    return { type: "APP_SET_ACTIVEWEEK", numChange };
  },
  appRemovePatientActiveAppointment: () => {
    return { type: "APP_REMOVE_PATIENTACTIVEAPPOINTMENT" };
  },
  appRemoveFixedPatientActiveAppointment: () => {
    return { type: "APP_REMOVE_PATIENTFIXEDACTIVEAPPOINTMENT" };
  },
  appCloseAppointmentPopup: () => {
    return { type: "APP_CLOSE_APPOINTMENTPOPUP" };
  },
  appointmentSetSelectedPatient: patientId => {
    return { type: "APPOINTMENT_SET_SELECTEDPATIENT", patientId };
  },
  appointmentInsertSelectedPatient: () => {
    return { type: "APPOINTMENT_INSERT_SELECTEDPATIENT" };
  },
  appointmentSetLockPatient: () => {
    return { type: "APPOINTMENT_SET_LOCKPATIENT" };
  },
  appointmentSetPatientStart: appointment => {
    return { type: "APPOINTMENT_SET_PATIENTSTART", appointment };
  },
  appointmentSetPatientEnter: appointment => {
    return { type: "APPOINTMENT_SET_PATIENTENTER", appointment };
  },
  appointmentSetPatientEnd: () => {
    return { type: "APPOINTMENT_SET_PATIENTEND" };
  },
  patientSetActivePatient: patient => {
    return { type: "PATIENT_SET_ACTIVEPATIENT", patient };
  }
};
