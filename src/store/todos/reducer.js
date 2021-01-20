import * as actions from "./actionTypes";
let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.ADD_TODO:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          finished: false,
        },
      ];
  }
}
