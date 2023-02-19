import React from "react";
import Task from "./Task";
import styles from "./DisplayTasks.module.css";
function DisplayTasks({ todos, setTodos }) {
  return (
    <div>
      <ul className={styles["list-container"]}>
          {todos.map((todo) => {
            return (
              <Task
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                key={todo.id}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default DisplayTasks;
