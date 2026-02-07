import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import todoSchema from "../schemas/todoSchema";
import { useTodos } from "../hooks/useTodos";

function TodoForm() {
  const { addTodo } = useTodos();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(todoSchema),
  });

  const onSubmit = (data) => {
    addTodo({
      title: data.title,
      description: data.description,
      completed: false,
    });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-xl shadow space-y-4"
    >
      <h2 className="text-lg font-semibold">Create New Task</h2>

      <div>
        <input
          {...register("title")}
          placeholder="Task title"
          className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-200"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      <div>
        <textarea
          {...register("description")}
          placeholder="Task description (optional)"
          rows={3}
          className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <button
        disabled={isSubmitting}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
