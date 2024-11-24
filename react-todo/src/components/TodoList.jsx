import React from 'react'

function TodoList(todos) {
    
  return (
    <div>
      <ul>
        {todos.map((item)=>(<li>{item.task}</li>))}
      </ul>
    </div>
  )
}

export default TodoList
