import { createStore } from "redux";
import reducer from "./todos/reducer";

export default function configureStore() {
  const store = createStore(reducer);
  return store;
}
