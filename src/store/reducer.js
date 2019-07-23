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
    default:
      return state;
  }
}
