import React from "react";
import styles from './Task.module.css'
const Task = ({ todo, todos, setTodos }) => {
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
  return (
    <li className="item-container">
      <span className={`${styles['task-container']} ${todo.completed ? styles['completed-task'] : ''}`}>
        <span>{todo.task}</span>
        <span>{todo.date}</span>
        <span>{todo.time}</span>
      </span>
      <span className="ControlButtons-container">
        <button>Edit</button>
        <button onClick={completedTaskHandler}>Completed</button>
        <button onClick={deleteTaskHandler}>Delete</button>
      </span>
    </li>
  );
};

export default Task;
