import React from "react";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h1>My Tasks</h1>
      <TaskList />
    </div>
  );
}

export default App;
