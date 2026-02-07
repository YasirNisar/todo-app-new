import { useEffect, useState } from "react";
import {
  createTodos,
  deleteTodos,
  fetchTodos,
  updateTodos,
} from "../api/api";
import TodoContext from "./TodoContext";

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  // Fetch todos
  useEffect(() => {
    fetchTodos().then((data) => setTodos(data || []));
  }, []);

  // Add todo
  const addTodo = async (todo) => {
    const newTodo = { ...todo, completed: false };
    const savedTodo = await createTodos(newTodo);

    setTodos((prev) => [...prev, savedTodo]);
  };

  // Update todo
  const updateTodo = async (id, updates) => {
    await updateTodos(id, updates);

    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
    );
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await deleteTodos(id);

    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  // Toggle completed
  const toggleCompleted = async (id) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    await updateTodo(id, { completed: !todo.completed });
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
