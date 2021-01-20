import * as actions from "./actionTypes";

export const addTodo = (description) => ({
  type: actions.ADD_TODO,
  payload: {
    description,
  },
});
