export default function reducer(state, action) {
  switch (action.type) {
    //
    case "APP_SET_VIEWOPTION":
      if (!action.option) {
        return state;
      }
      return { ...state, viewOption: action.option };
    //
    default:
      return state;
  }
}
