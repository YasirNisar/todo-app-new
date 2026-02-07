import TodoList from "../components/TodoList";

function Todos() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h2 className="text-xl font-semibold mb-4">Your Tasks</h2>
      <TodoList />
    </div>
  );
}

export default Todos;
