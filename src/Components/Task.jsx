import React, { useState } from "react";
import styles from "./Task.module.css";
const Task = ({
  todo,
  todos,
  setTodos,
  setTaskInput,
  setDateInput,
  setTimeInput,
  taskInput,
  dateInput,
  timeInput
}) => {
  const [editId, setEditId] = useState(0);
  const deleteTaskHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  //-----------------------------------------------
  const completedTaskHandler = () => {
    setTodos(
      todos.map((task) => {
        if (task.id === todo.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };
 
 const editTaskHandler = () => {
   if(editId) {
    setTodos(
      todos.map((task) => {
        if (task.id === todo.id) {
          const editedTask = {
            ...task,
            task: taskInput,
            date:dateInput,
            time:timeInput,
            completed: false,
          }
          return editedTask
        }
        return task;
      })
    );
    setEditId(null);
   } else {
    const temp = todos.find((task) => task.id === todo.id);
    setTaskInput(temp.task);
    setDateInput(temp.date);
    setTimeInput(temp.time);
    setEditId(todo.id);
   }
  } 

    return (
      <li className={styles["item-container"]}>
        <span
          className={`${styles["task-container"]} ${
            todo.completed ? styles["completed-task"] : ""
          }`}
        >
          <span className={styles["task-cell"]}>{todo.task}</span>
          <span className={styles["date-cell"]}>
            {todo.date ? todo.date : "not entered"}
          </span>
          <span className={styles["time-cell"]}>
            {todo.time ? todo.time : "not entered"}
          </span>
        </span>
        <span className={styles["ControlButtons-container"]}>
          <button onClick={editTaskHandler}> {editId ? 'Done': 'Edit'}</button>
          <button onClick={completedTaskHandler}>
            {!todo.completed ? "Undone" : "Done"}
          </button>
          <button onClick={deleteTaskHandler}>Delete</button>
        </span>
      </li>
    );
  ;
};
export default Task;
