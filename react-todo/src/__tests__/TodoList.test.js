import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe("TodoList Component", () => {
  test("renders initial state correctly", () => {
    render(<TodoList />);
    
    // Check that demo todos are rendered
    expect(screen.getByText(/Buy groceries/i)).toBeInTheDocument();
    expect(screen.getByText(/Complete project report/i)).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText(/add a new task/i);
    const button = screen.getByText(/add/i);

    // Simulate user input and form submission
    fireEvent.change(input, { target: { value: "Learn React" } });
    fireEvent.click(button);

    // Check if the new todo is added
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  });

  test("toggles a todo item", () => {
    render(<TodoList />);
    
    const todo = screen.getByText(/Buy groceries/i);
    const checkbox = todo.previousSibling; // Assuming a checkbox is used

    // Check initial state
    expect(checkbox).not.toBeChecked();

    // Toggle to completed
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    // Toggle back to not completed
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  test("deletes a todo", () => {
    render(<TodoList />);

    const todo = screen.getByText(/Buy groceries/i);
    const deleteButton = todo.nextSibling; // Assuming a delete button is next to the todo

    // Delete the todo
    fireEvent.click(deleteButton);

    // Check if the todo is removed
    expect(screen.queryByText(/Buy groceries/i)).not.toBeInTheDocument();
  });
});
