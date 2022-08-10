import { useState } from "react";
import "./App.css";
import Create from "./components/Create";
import Sidebar from "./components/Sidebar";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App container">
      <div className="createTask">
        <Create tasks={tasks} setTasks={setTasks} />
      </div>
      <div className="sidebar">
        <Sidebar tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
