const toDoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          isCompleted: action.complete,
          text: action.text,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id == action.id
          ? { ...todo, text: action.text }
          : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) =>
        todo.id == action.id
          ? false
          : true
      );
    default:
      return state;
  }
};
export default toDoReducer;
