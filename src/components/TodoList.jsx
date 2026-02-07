import { useTodos } from "../hooks/useTodos";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos=[], loading } = useTodos();

  if (loading) {
    return <p className="text-center text-gray-500">Loading tasks...</p>;
  }
  if (todos.length === 0) {
    return <p className="text-center text-gray-500">No tasks yet.</p>;
  }

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
