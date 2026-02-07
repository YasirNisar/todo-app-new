import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import todoSchema from "../schemas/todoSchema";
import { useTodos } from "../hooks/useTodos";

function TodoItem({ todo }) {
  const { updateTodo, deleteTodo, toggleCompleted } = useTodos();
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: todo.title,
      description: todo.description || "",
    },
  });

  const onSubmit = (data) => {
    updateTodo(todo.id, data);
    setIsEditing(false);
    reset(data);
  };

  return (
    <li className="bg-white rounded-lg shadow p-4 flex gap-3">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleCompleted(todo.id)}
        className="mt-1"
      />

      <div className="flex-1">
        {!isEditing ? (
          <>
            <h3
              className={`font-semibold ${
                todo.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {todo.title}
            </h3>
            {todo.description && (
              <p className="text-sm text-gray-600">{todo.description}</p>
            )}
          </>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <input
              {...register("title")}
              className="w-full border rounded px-2 py-1"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}

            <textarea
              {...register("description")}
              rows={2}
              className="w-full border rounded px-2 py-1"
            />
          </form>
        )}
      </div>

      <div className="flex flex-col gap-1 text-sm">
        {isEditing ? (
          <button
            onClick={handleSubmit(onSubmit)}
            className="text-green-600 hover:underline"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-600 hover:underline"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-600 hover:underline"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
