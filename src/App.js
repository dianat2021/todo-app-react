import React, { useState, useEffect } from "react";
import "./App.css";
import DisplayTasks from "./Components/DisplayTasks";
import Form from "./Components/Form";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [error,setError] = useState(false)
  const [errorMessage,setErrorMessage] = useState({})
  const [taskStatus, setTaskStatus] = useState('all');
  const [filteredTasks, setFilteredTask] = useState([]);

  const filteredTaskHandler = ()=>{
    switch (taskStatus) {
      case 'completed':
        return setFilteredTask(todos.filter(todo => todo.completed === true))
      case 'incomplete':
        return setFilteredTask(todos.filter(todo => todo.completed === false))
      default:
        return setFilteredTask(todos)
    }
  }
  //-----------------------------------------------
  useEffect(()=>{
    filteredTaskHandler()
  }, [todos, taskStatus])
  return (
    <div className="App">
      <h1>Register Your Tasks</h1>
      <Form
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        dateInput={dateInput}
        setDateInput={setDateInput}
        timeInput={timeInput}
        setTimeInput={setTimeInput}
        todos={todos}
        setTodos={setTodos}
        error={error}
        setError={setError}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        setTaskStatus={setTaskStatus}
      />
      <DisplayTasks todos={todos} setTodos={setTodos} filteredTasks={filteredTasks}/>
    </div>
  );
}

export default App;
