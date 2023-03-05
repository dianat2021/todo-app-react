import React from "react";
import styles from "./Form.module.css";
import { FaExclamationCircle } from "react-icons/fa";
const Form = ({
  taskInput,
  setTaskInput,
  dateInput,
  setDateInput,
  timeInput,
  setTimeInput,
  todos,
  setTodos,
  error,
  setError,
  errorMessage,
  setErrorMessage,
  setTaskStatus,
  editId,
}) => {
  //-----------------------------
  const taskInputHandler = (e) => {
    setTaskInput(e.target.value);
    setError(false);
  };
  //-----------------------------
  const dateInputHandler = (e) => {
    setDateInput(e.target.value);
  };
  //-----------------------------
  const timeInputHandler = (e) => {
    setTimeInput(e.target.value);
  };
  //-----------------------------
  const submitHandler = (e) => {
    e.preventDefault();
    const error = {
      emptyInput: "The input is empty",
      characterLimit: "You entered more than 35 characters",
    };
    if (taskInput === "") {
      setError(true);
      setErrorMessage(error.emptyInput);
      return;
    } else if (taskInput.length > 35) {
      setError(true);
      setErrorMessage(error.characterLimit);
      return;
    }
    const userData = {
      task: taskInput,
      date: dateInput,
      time: timeInput,
      completed: false,
      id: Math.floor(Math.random() * 1000 + 1),
    };
    setTodos((prev) => {
      return [...prev, userData];
    });
    setTaskInput("");
    setDateInput("");
    setTimeInput("");
  };
  //----------------------------------------------
  const taskStatusHandler = (e) => {
    setTaskStatus(e.target.value);
  };
  return (
    <form className={styles["form-container"]}>
      <section className={styles["task-column"]}>
        <div>
          <label>
            Task<sup>*</sup>:
          </label>
          <input
            type="text"
            onChange={taskInputHandler}
            value={taskInput}
            className={`${styles["task-input"]} ${
              error ? styles["empty-input"] : ""
            }`}
            placeholder="Enter your task (Max 35 characters)"
          />
          {error && (
            <div className={styles["character-limit"]}>
              <span>
                <FaExclamationCircle size={15} color={"black"} />
              </span>{" "}
              {errorMessage}{" "}
            </div>
          )}
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            onChange={dateInputHandler}
            value={dateInput}
            className={styles["date-input"]}
          />
        </div>
        <div>
          <label>Time:</label>
          <input
            type="time"
            onChange={timeInputHandler}
            value={timeInput}
            className={styles["time-input"]}
          />
        </div>
        <button onClick={submitHandler} className={styles["add-button"]}>
          Add
        </button>
      </section>
      <section className={styles["filter-column"]}>
        <div className={styles["filter-container"]}>
          <label>Filter tasks:</label>
          <select className={styles.filter} onChange={taskStatusHandler}>
            <option value="all">All Tasks</option>
            <option value="completed">Done tasks</option>
            <option value="incomplete">Undone task</option>
          </select>
        </div>
      </section>
    </form>
  );
};

export default Form;
