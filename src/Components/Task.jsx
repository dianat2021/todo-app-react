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
    <li className={styles['item-container']}>
      <span className={`${styles['task-container']} ${todo.completed ? styles['completed-task'] : ''}`}>
        <span className={styles['task-cell']}>{todo.task}</span>
        <span className={styles['date-cell']}>{todo.date}</span>
        <span className={styles['time-cell']}>{todo.time}</span>
      </span>
      <span className={styles['ControlButtons-container']}>
        <button>Edit</button>
        <button onClick={completedTaskHandler}>{!todo.completed ? "Undone" : "Done"}</button>
        <button onClick={deleteTaskHandler}>Delete</button>
      </span>
    </li>
  );
};

export default Task;
