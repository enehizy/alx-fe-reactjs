import React from 'react'

function AddTodoForm(updateTodo) {
    const submitForm =(e)=>{
       e.preventDefault();
      const task = e.target.task;
     console.log({task})
    }
  return (
    <form onSubmit={(e)=> submitForm(e)}>
        <input name ="task" type="text" placeholder="new task" />
         <button type="submit">submit</button>
    </form>
  )
}

export default AddTodoForm
