import { useState } from 'react'


const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: "Meditation", completed: false },
        { id: 2, text: "Clean the house", completed: false },
        { id: 1, text: "Do ALX tasks", completed: false },
    ]);

    const addTodo = () => {
        setTodos([...todos, { id: todos.length + 1, text, completed: false }]);
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    return (
        <div>
            <h1>Todo List</h1>
            <addTodoForm addTodo={addTodo} />
            <ul>
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        onClick={() => toggleTodo(todo.id)}
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                        <button onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id); }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};



export default TodoList