import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the todo form', () => {
  render(<App />);
  const todoHeader = screen.getByText(/Todo:/i);
  const strikeCompleted = screen.getByLabelText(/Strike completed/i);
  const deleteCompleted = screen.getByLabelText(/Delete completed/i);
  
  expect(todoHeader).toBeInTheDocument();
  expect(strikeCompleted).toBeInTheDocument();
  expect(deleteCompleted).toBeInTheDocument();
});

test('able to add todo', () => {
  render(<App />);

  const deleteCompleted = screen.getByLabelText(/Delete completed/i);

  const taskInput = screen.getByPlaceholderText("Task");
  const dueDateInput = screen.getByPlaceholderText("Due Date");
  const addButton = screen.getByText("Add");

  userEvent.clear(taskInput);
  userEvent.type(taskInput, "TestTask");

  userEvent.clear(dueDateInput);
  userEvent.type(dueDateInput, "TestDueDate");

  userEvent.click(addButton);

  const addedTask = screen.getByText(/TestTask/i);
  const addedDueDate = screen.getByText(/TestDueDate/i);

  expect(addedTask).toBeInTheDocument();
  expect(addedDueDate).toBeInTheDocument();

})

test('able to delete todo', () => {
  render(<App />);

  const deleteCompleted = screen.getByLabelText(/Delete completed/i);
  const defaultTask = screen.getByLabelText(/I want to/i);

  expect(defaultTask).toBeInTheDocument();

  userEvent.click(deleteCompleted);
  userEvent.click(defaultTask);

  expect(defaultTask).not.toBeInTheDocument();

  const noMoreTaskLeftInfo = screen.getByText(/No more tasks left./i);
  expect(noMoreTaskLeftInfo).toBeInTheDocument();
})
