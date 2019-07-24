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
  }
};
