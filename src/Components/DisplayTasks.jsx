import React from 'react'
import Task from './Task'

function DisplayTasks({todos, setTodos}) {
  return (
    <div>
      <ul>
        {todos.map(todo =>{
            return <Task todo={todo} todos={todos} setTodos={setTodos} key={todo.id}/>
        })}
      </ul>
    </div>
  )
}

export default DisplayTasks
