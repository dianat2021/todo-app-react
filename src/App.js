import React, { useState } from "react";
import "./App.css";
import DisplayTasks from "./Components/DisplayTasks";
import Form from "./Components/Form";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1>Rigister Your Tasks!</h1>
      <Form
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        dateInput={dateInput}
        setDateInput={setDateInput}
        timeInput={timeInput}
        setTimeInput={setTimeInput}
        todos={todos}
        setTodos={setTodos}
      />
      <DisplayTasks todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
