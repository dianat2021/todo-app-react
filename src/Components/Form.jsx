import React from "react";
import styles from "./Form.module.css"
const Form = ({ taskInput, setTaskInput, dateInput, setDateInput, timeInput, setTimeInput, todos, setTodos }) => {
    //-----------------------------
    const taskInputHandler = (e)=>{
        setTaskInput(e.target.value)
    }
    //-----------------------------
    const dateInputHandler = (e)=>{
        setDateInput(e.target.value)
    }
    //-----------------------------
    const timeInputHandler = (e)=>{
        setTimeInput(e.target.value)
    }
    //-----------------------------
    const submitHandler = (e)=>{
        e.preventDefault();
        const userData = {
            task: taskInput,
            date: dateInput,
            time: timeInput,
            completed: false,
            id: Math.floor((Math.random() * 1000) + 1)
        }
        setTodos((prev)=>{ return [...prev, userData]})
        setTaskInput('');
        setDateInput('');
        setTimeInput('');
    }
  return (
    <form className={styles['form-container']}>
      <div>
        <label>Task:</label>
        <input type="text" onChange={taskInputHandler} value={taskInput} className={styles['task-input']}/>
      </div>
      <div>
        <label>Date:</label>
        <input type="date" onChange={dateInputHandler} value={dateInput} className={styles['date-input']}/>
      </div>
      <div>
        <label>Time:</label>
        <input type="time" onChange={timeInputHandler} value={timeInput}/>
      </div>
      <button onClick={submitHandler} className={styles['add-button']}>Add</button>
    </form>
  );
};

export default Form;
