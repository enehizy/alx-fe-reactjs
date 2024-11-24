

import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'

function App() {
  const [todos,setTodos] = React.useState([
    { id: 1, task: "Buy groceries", completed: false },
    { id: 2, task: "Complete project report", completed: true },
    { id: 3, task: "Workout for 30 minutes", completed: false },
    { id: 4, task: "Call mom", completed: true },
    { id: 5, task: "Read a book", completed: false },
    { id: 6, task: "Prepare dinner", completed: false },
    { id: 7, task: "Organize closet", completed: false },
    { id: 8, task: "Pay electricity bill", completed: true },
    { id: 9, task: "Schedule dentist appointment", completed: false },
    { id: 10, task: "Write a blog post", completed: true },
    { id: 11, task: "Learn a new recipe", completed: false },
    { id: 12, task: "Update LinkedIn profile", completed: false },
    { id: 13, task: "Watch a coding tutorial", completed: true },
    { id: 14, task: "Clean the car", completed: false },
    { id: 15, task: "Meditate for 10 minutes", completed: true },
    { id: 16, task: "Reply to emails", completed: false },
    { id: 17, task: "Fix broken chair", completed: false },
    { id: 18, task: "Plan weekend trip", completed: true },
    { id: 19, task: "Take pet for a walk", completed: true },
    { id: 20, task: "Set up budget for next month", completed: false }
  ]);

  return (
    <div>
    <AddTodoForm/>
    <TodoList todos={todos} updateTodo={setTodos}/>
    </div>
  )
}

export default App
