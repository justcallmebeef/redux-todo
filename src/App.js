import React from "react";
import "./App.css";

function App(state) {
  let todos = state.store.getState();
  return (
    <div className="App">
      {todos.map((todoItem) => (
        <div>{todoItem.description}</div>
      ))}
    </div>
  );
}

export default App;
