import React from "react";
import Task from "./Task";
import styles from "./DisplayTasks.module.css";
function DisplayTasks({
  todos,
  setTodos,
  filteredTasks,
  setTaskInput,
  setDateInput,
  setTimeInput,
  taskInput,
  dateInput,
  timeInput,
}) {
  return (
    <div>
      <ul className={styles["list-container"]}>
        <header className={styles["list-header"]}>
          <span className={styles["list-titles"]}>
            <span className={styles["task-title"]}>Task title</span>
            <span className={styles["due-title"]}>Due date</span>
            <span className={styles["due-time"]}>Due time</span>
          </span>
          <span className={styles["control-title"]}>Controls</span>
        </header>
        {todos.length === 0 && (
          <p className={styles["empty-list"]}>No Task to show!</p>
        )}
        {filteredTasks.map((todo) => {
          return (
            <Task
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              key={todo.id}
              setTaskInput={setTaskInput}
              setDateInput={setDateInput}
              setTimeInput={setTimeInput}
              taskInput={taskInput}
              dateInput={dateInput}
              timeInput={timeInput}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default DisplayTasks;
