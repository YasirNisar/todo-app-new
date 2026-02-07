import { createContext } from "react";


const TodoContext = createContext({
  todos: [],
  loading: false,
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleCompleted: () => {},
});

export default TodoContext;