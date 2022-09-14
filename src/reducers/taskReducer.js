export default function taskReducer(state, action) {
  switch (action.type) {
    case "DATE":
      return { ...state, date: new Date(action.payload) };

    case "TITLE":
      return { ...state, name: action.payload };
    default:
      return { ...state };
  }
}
