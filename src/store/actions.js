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
  appointmentSetSelectedPatient: patientId => {
    return { type: "APPOINTMENT_SET_SELECTEDPATIENT", patientId };
  },
  appointmentInsertSelectedPatient: () => {
    return { type: "APPOINTMENT_INSERT_SELECTEDPATIENT" };
  },
  appointmentSetLockPatient: () => {
    return { type: "APPOINTMENT_SET_LOCKPATIENT" };
  }
};
